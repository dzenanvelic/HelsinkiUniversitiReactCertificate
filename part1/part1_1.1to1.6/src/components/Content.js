
import React from 'react'
import Part from './Part'

function Content({parts}) {
console.log("contentprops",parts)

    
    return (
        <div>
            {parts.map((part)=>{
                 console.log("part",part)
                return <Part key={part.id} name={part.name} exercices={part.exercices}/>
               
            })}
           
             
        </div>
    )
}

export default Content
