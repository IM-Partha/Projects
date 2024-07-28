import React, { useState } from 'react'

const ShowHide = () => {
    const [showhinde, setshowhide]=useState(false)
  return (
    <div>
        {
            showhinde ?
            <h1>Partha</h1> :
            null
        }
        
        <button onClick={()=>setshowhide(true)}>Show</button>
        <button onClick={()=>setshowhide(false)}>Hide</button>
    </div>
  )
}

export default ShowHide