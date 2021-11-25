import React, { useState } from 'react'

function AddNewPerson({persons,setPersons,phoneServices,setErrorMessage,newName,setNewName}) {
    
  const [ newMobileNumber, setNewMobileNumber ] = useState('')
  const [ newNumberHome, setNewNumberHome ] = useState('')

const newNameAdd=(e)=>{
setNewName(e.target.value)
  
}
const newMobileNumberAdd=(e)=>{
setNewMobileNumber(e.target.value)
  
}
const newHomeNumberAdd=(e)=>{
setNewNumberHome (e.target.value)
  
}

const addName=(e)=>{
 e.preventDefault()
/*const founded =persons.findIndex(p=>p.name.toLowerCase() === newName.toLowerCase())
if(founded !== -1){
  return alert(`${newName} is already added to phonebook`)
} */
const newContact={
    name:newName,
    mobileNumber:newMobileNumber,
    homeNumber:newNumberHome
  }
  phoneServices
  .create(newContact)
  .then(res=>{
    console.log("response created phonebook contact",res)
    setErrorMessage("Created new contact ")
    setTimeout(()=>{
setErrorMessage(null)
    },4000)
  setNewName('')
   setNewMobileNumber ('') 
   setNewNumberHome ('') 
  })
  .catch(error=>{
    setErrorMessage(error.response.data.error )
        setTimeout(()=>{
setErrorMessage(null)
        },5000) 
  })
}
    return (<>
        <div>
           <form>
        <div>
          name: <input value={newName} onChange={newNameAdd} />
        </div>
        <div>
          mobileNumber: <input value={newMobileNumber} onChange={newMobileNumberAdd} />
        </div>
        <div>
          homeNumber: <input value={newNumberHome} onChange={newHomeNumberAdd} />
        </div>
        <div>
          <button type="submit"onClick={addName}>add</button>
        </div>
      </form>  
        </div>
        <div>debugName: {newName}, 
    debugNumber: mobile { newMobileNumber},home {newNumberHome} </div>
   </> )
}

export default AddNewPerson
