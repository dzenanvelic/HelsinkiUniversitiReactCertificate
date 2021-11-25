import React, { useState } from 'react'

function Togglable(props) {
  const [visible,setVisible]=useState(true)

  const isNotVisible ={ display: visible ? 'none': '' }

  const setVisibility =() => {
    setVisible(!visible)
  }
  return (
    <div >
      <div>
        <button  onClick={setVisibility}>{props.buttonValue}
        </button>

      </div>
      <div style={isNotVisible}>
        {props.children}

        <button onClick={setVisibility}>cancel</button>


      </div>
    </div>
  )
}

export default Togglable
