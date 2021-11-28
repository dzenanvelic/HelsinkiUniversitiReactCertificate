import axios from 'axios'
import { useEffect, useState } from 'react'


export  const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
   
      const singleCountry =async()=>{
         const response =  await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`)
         console.log('country response',response)
            setCountry(response.data)
      }
      singleCountry()
    if ( name === '') {
        return null
    }

    if (!country) {
        return []
    }

    return country
      

  },[name])

  return country
}
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}