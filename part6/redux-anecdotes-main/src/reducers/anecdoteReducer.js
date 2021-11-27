import anecdoteService from '../services/anecdotes'




 
const anecdoteReducer = (state = [], action) => {
  console.log("state",state)

  switch(action.type){
    case "GET_ALL":
      return action.payload
    
    case "VOTE":
     const id = action.data.id
     const votedAnecdote = state.find(anecdote=>anecdote.id === id)
     const updatedAnecdote = {...votedAnecdote,votes:votedAnecdote.votes + 1}
     return state.map(anecdote=> anecdote.id !== id ? anecdote : updatedAnecdote)
case "NEW_NOTE":
  return [...state, action.payload]
     

    default:
      return state
  }
  console.log('state now: ', state)
  console.log('action', action)

 
}
export const getAllAnecdotes =()=>{
return async dispatch=>{
  const anecdotes = await anecdoteService.getAll()
  dispatch({type:"GET_ALL",payload:anecdotes})
}
  }
  export const createNewAnecdote=(newAnec)=>{
    return async dispatch=>{
      const newAnecdote = await anecdoteService.createNew(newAnec)
      dispatch({type:"NEW_NOTE",payload:newAnecdote})
    }
  }

  
export default anecdoteReducer