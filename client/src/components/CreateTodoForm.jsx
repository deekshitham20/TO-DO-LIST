import React from 'react'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import createTodosRequest from '../api/createTodosRequest'

function CreateTodoForm() {
    const [text,setText] = useState('')
    const queryClient = useQueryClient()
    const {mutate: createTodo} = useMutation( (newTodo)=>createTodosRequest(newTodo), {
        onSettled : () => { queryClient.invalidateQueries('todos')}
    })
  return (
    <form onSubmit={(e)=> {
        e.preventDefault()
        if(!text) return
        createTodo({text})
        setText('')
    }}>
        <input type="text" onChange={e =>setText(e.target.value)} value={text}/>
        <button>Create</button>
    </form>
  )
}

export default CreateTodoForm
