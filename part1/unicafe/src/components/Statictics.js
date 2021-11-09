import React from 'react'

function Statictics(props) {
    const{name,quantity}=props
    return (
       
        <div>
          <p className="statisticParagraph">{name}: {quantity}</p>  
        </div>
    )
}

export default Statictics
