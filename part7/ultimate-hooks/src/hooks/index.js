import { useEffect, useState } from "react"
import axios from "axios"

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

export const useResource=(baseUrl)=>{
const [resources,setResources]= useState([])

useEffect(()=>{
const getResources =async()=>{
    const res = await axios.get(baseUrl)
     setResources(res.data)
}
getResources()
},[setResources,baseUrl])

const create = async(newProd)=>{
  const res =  await axios.post(baseUrl,newProd)
   setResources(resources.concat(res.data))
}
const service ={
    create
}
return [resources,service]
}