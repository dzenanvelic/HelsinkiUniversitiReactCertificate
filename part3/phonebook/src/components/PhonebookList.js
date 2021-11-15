import React from 'react'

function PhonebookList({persons,setErrorMessage,phoneServices}) {



  const handleDelete=(id)=>{
    /* const phonebookPerson= persons.find(p=>p.id === id)
    console.log("phonePerson",phonebookPerson)
    console.log("Numberid",id) */
    let result = window.confirm("Do you really want delete this contact?");
    if(result){
 phoneServices
.deleteNumber(id)
.then(res=> {
 /*  console.log('responseDelete',res)
  console.log("Number deleted") */
  setErrorMessage("Contact deleted")
setTimeout(()=>{
setErrorMessage(null)
},3000)
})
.catch((err)=>{console.log("Deleted from phonebook error and there is on such contact",err)
setErrorMessage(`Error deleting ${id} message, ${err}`)
})
    }

  }
    return (
        <div className="personsDiv">
              {
        persons?.map((person)=>{
         // console.log("personid",person.id)
          return <div key={person.name}>
          <p>name:<b> {person.name}</b>  mobile: {person.mobileNumber} home: {person.homeNumber} <button onClick={()=>handleDelete(person.id)}>delete</button></p>
         
          </div>
        })
      }
        </div>
    )
}

export default PhonebookList
