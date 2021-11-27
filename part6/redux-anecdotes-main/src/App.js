import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AncedoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { getAllAnecdotes } from './reducers/anecdoteReducer'
const App = () => {
 const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getAllAnecdotes())
},[dispatch])

  

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <Notification/>
     <AnecdoteList/>
      <h2>create new</h2>
     <AncedoteForm/>
    </div>
  )
}

export default App