import React from 'react'

function Total({parts}) {
 let total = parts.reduce((a,s)=> a + s.exercises,0);
    //console.log("tottal",total)
    return (
        <div>
            <p><b>Number of exercises {total}</b></p> 
        </div>
    )
}

export default Total
