
const filterReducer =(state=null,action)=>{
switch(action.type){
    case "FILTER_ANECDOTES":
        return action.payload
        default:
            return state
}
}

export default filterReducer