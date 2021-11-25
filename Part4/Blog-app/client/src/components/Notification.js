import React from 'react'

function Notification({ errorMessage }) {
  if(!errorMessage){
    return null
  }
  return (
    <div className="message">
      {errorMessage}
    </div>
  )
}

export default Notification
