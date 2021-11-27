import React from 'react'
import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { notificationMessage } from '../reducers/notificationReducer'






function AncedoteForm() {

    const dispatch = useDispatch()
    const handleNewNote=async(e)=>{
  e.preventDefault()
    const content = e.target.note.value
  e.target.note.value=''
 let anecdote = {
    content,
    votes:0,
    id:generateId()

  }
dispatch(createNewAnecdote(anecdote))
dispatch(notificationMessage(`New anecdote ${content} created`,3))
}
const generateId=()=>{
return Number((Math.random() * 100000).toFixed(0)) 
}
    return (
        <div>
          <form onSubmit={handleNewNote}>
        <div><input name="note" /></div>
        <button type="submit">create</button>
      </form>   
        </div>
    )
}

export default AncedoteForm
