import React from 'react'

function Button({name,handleClick}) {
    return (
        
          <button className="buttonsMain" onClick={handleClick}>{name}</button>  
     
    )
}

export default Button
