import React from 'react'

function Filter({countryName,setCountryName}) {
    return (
        <div className="filterDiv">
       <input type="text" placeholder="enter country name"
       value={countryName} onChange={(e)=>setCountryName(e.target.value)}
       />
     </div>
    )
}

export default Filter
