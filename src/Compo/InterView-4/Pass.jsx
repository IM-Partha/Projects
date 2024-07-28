import React, { useState } from 'react'


const Pass = () => {
    const [showHide, setshowHide] = useState(false)
  return (
    <div>
        <div>
            <input className='p-2 shadow-lg rounded w-[500px]' placeholder='Password' type={showHide ? 'text': 'password'} />
            <button onClick={()=>setshowHide(!showHide)}  className='bg-blue-500  text-white p-2 rounded'>{showHide? 'Hide' : 'Show'}</button>
        </div>
    </div>
  )
}

export default Pass