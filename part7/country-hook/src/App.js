import React, { useState, useEffect } from 'react'

import { useCountry,useField } from './hooks'







const Country = ({ country }) => {
  
 if (!country) {
      return null
    }

    if (country.length === 0) {
        return (
            <div>
            not found...
            </div>
        )
    }
    const returnedCountry=country[0]
  return (
    <div>
      <h3>{returnedCountry?.name} </h3>
      <div>capital {returnedCountry?.capital} </div>
      <div>population {returnedCountry?.population}</div> 
      <img src={returnedCountry?.flag} height='100' alt={`flag of ${returnedCountry?.name}`}/>  
    </div>
  )
}

const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
