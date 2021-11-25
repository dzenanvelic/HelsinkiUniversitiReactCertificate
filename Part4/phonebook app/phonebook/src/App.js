
import { useEffect, useState } from 'react';
import './App.css';
import AddNewPerson from './components/AddNewPerson';
import Notificxation from './components/Notificxation';
import PhonebookList from './components/PhonebookList';
import SearchFilter from './components/SearchFilter';
import phoneServices from './services/phobebookFunc'
function App() {
  const [persons, setPersons] = useState([])
  const[errorMessage, setErrorMessage]= useState(null)
const [ newName, setNewName ] = useState('')
  useEffect(()=>{
phoneServices
.getAll()
.then(res=>{console.log("res",res.data)
setPersons(res.data)
})
  },[])
  //console.log("persone",persons)
  return (<>
    <div> 
      <h2>Phonebook</h2>
      <Notificxation errorMessage={errorMessage}/>
      <SearchFilter persons={persons} setPersons={setPersons}/>
      <h3>Add new Person</h3>
     <AddNewPerson persons={persons} setPersons={setPersons}phoneServices={phoneServices} setErrorMessage={setErrorMessage} newName={newName} setNewName={setNewName}/>
     
      <h2>Numbers</h2>
    <PhonebookList persons={persons} setErrorMessage={setErrorMessage} phoneServices={phoneServices}/>
    </div>
    
 </> )
}

export default App;
