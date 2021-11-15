
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Filter from './components/Filter';
import Country from './components/Country';
function App() {
  const[countries,SetCountries]=useState([])
  const[countryName,setCountryName]= useState('')

  useEffect(()=>{
axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
.then(response=>{
  //console.log("response countries data",response.data)
  SetCountries(response.data)
})
  },[countryName])
  return (
    <div className="mainApp">
      <h2>Please select country:</h2>
    <Filter countryName={countryName} setCountryName={setCountryName}/>
    
     <Country countries={countries} setCountryName={setCountryName}/>
  
    
    </div>
  );
}

export default App;
