import React from 'react'
import updateTodosRequest from '../api/updateTodosRequest'
import deleteTodosRequest from '../api/deleteTodosRequest'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const ToDoItems =({todolist})=>{
    const queryClient = useQueryClient()
    const {mutate: updateTodo} = useMutation( (updatedTodo)=>updateTodosRequest(updatedTodo), {
        onSettled : () => { queryClient.invalidateQueries('todos')}
    }
    )

    const {mutate: deleteTodo} = useMutation( (updatedTodo)=>deleteTodosRequest(updatedTodo), {
        onSettled : () => { queryClient.invalidateQueries('todos')}
    }
    )
 return (
        <div>
          <input type="checkbox" onChange={()=>updateTodo(
            {...todolist,completed: !todolist.completed})} checked={todolist.completed}/>
            <input type="text" onChange={(e)=>updateTodo(
            {...todolist,text : e.target.value})} value={todolist.text}/>
            <button onClick={() =>deleteTodo(todolist)
            }>delete</button>
          </div>
  )
}
export default ToDoItems
