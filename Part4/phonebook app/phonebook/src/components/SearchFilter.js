import React, { useState } from 'react'

function SearchFilter({persons, setPersons}) {
    const [value,setValue]= useState('')
    return (
      <div className="searchDiv">
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}  placeholder="search"/>
{/* 
        {
            persons.filter(item=>{
                if(!value) return true 
                if(item.name.includes(value)){
                    return true
                }
            })
            .map(item=>{
              return  <div key={item.number}>
                    <p>{item.name}</p>
                    <p>{item.number}</p>
                </div>
            })
        } */}
      </div>
    )
}

export default SearchFilter
