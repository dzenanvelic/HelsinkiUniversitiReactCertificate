import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Country({countries,setCountryName}) {
    const[weather,setWeatherData]= useState('')
   
    
    let capital =countries[0]?.capital[0]

 // console.log("weather",weather)
useEffect(()=>{
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API}q=${capital}&days=1&aqi=no&alerts=no`)
    
    .then((res=>{
        console.log("res",res.data.current)
        setWeatherData(res.data.current)
    }))
},[capital])


 
console.log("capital",capital, )
    return (
         <div className="showDiv">

      { countries.length > 10 ?
       <h4>Too many matches, specify another filter</h4>
      : countries.length  > 1 ?
       (countries.map((country,index)=>{
         return <div className="countriesUnderTen"  key={index}>
            <p>{country?.name.official}</p> 
            <button onClick={(e)=>{
                 e.preventDefault()
        setCountryName(country?.name.official)
            }}>show</button>
         </div>
       })) 
      :   ((countries.map((country,index)=>{
         return <div key={index}>
           <h3>{country?.name.official}</h3>
           <h4>Capital: {country?.capital[0]}</h4>
          
           <p>population: {country?.population}</p>
           <p>Languages:</p>
            {Object.keys(country?.languages).map((language,index)=>{
           return <li key={index}>{country?.languages[language]}</li>
          })} 

          <img className="flag" src={country?.flags.png} alt="flag" />
         </div>
       })))}  
 {countries[0]?.capital[0] && countries.length === 1 &&  <div className="weatherDiv">
       
<h2>Weather in {capital}</h2>
<p>temperature: {weather?.feelslike_c}&#8451;</p>
<img className="weatherImage" src={weather.condition?.icon  } alt="weathericon" />
<p>Weather desc: {weather?.condition.text}</p>
<p>UV index: <b>{weather?.uv}</b></p>
<p>wind speed: {weather.wind_kph} kph</p>
<p>wind direction: {weather.wind_dir} </p>
    </div>}
  

     </div>
    )
}

export default Country
