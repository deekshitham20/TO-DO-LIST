import React from 'react'
import CreateTodoForm from '../components/CreateTodoForm'
import ToDoItems from '../components/ToDoItems'
import { useQuery } from 'react-query'
import readTodosRequest from '../api/readTodosRequest'
import ClipLoader from 'react-spinners/ClipLoader'

function TodoPage() {
    const {isLoading , data :todos} = useQuery('todos',readTodosRequest)
  return (
    <div>
        <h1>TO-DO LIST</h1>
      {
      isLoading ? (<ClipLoader size ={150}/>) :
      (todos.map(todo => <ToDoItems todolist = {todo} key ={todo._id} />))
     }
     <CreateTodoForm/>
    </div>
  )
}

export default TodoPage
