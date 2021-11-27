import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notificationMessage } from '../reducers/notificationReducer'


function AnecdoteList() {
const dispatch=useDispatch()
    // let anecdotes = useSelector(state => state.anecdote)
 
     const vote = (id,anecdote) => {
   dispatch({type:"VOTE",data:{id}})
   dispatch(notificationMessage(`You voted for "${anecdote}" anecdote`,4))
    
}
 let anecdote = useSelector(({filter,anecdote})=>{
   //console.log( anecdote,filter)
if(filter === null){
  return anecdote
}
const regex = new RegExp(filter,'i')

return anecdote.filter(a=>a.content.match(regex))

})
let sortVotesByVoted = (a,b)=>b.votes - a.votes
    return (
        <div>
             {anecdote.sort(sortVotesByVoted).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id,anecdote.content)}>vote</button>
          </div>
        </div>
      )}
        </div>
    )
}

export default AnecdoteList
