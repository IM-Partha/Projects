import React, { useState } from 'react'



const Table = ({tablecontent}) => {
    const [currentnumber,setcurrentnumber]=useState(0)

    function handelClick(gateID){
        setcurrentnumber(gateID)
    }
  return (
    <div>
        <div className='flex justify-center gap-3'>
            {
                tablecontent.map((data,index)=>(
                    <ul className='border p-4'>
                        <li className={`cursor-pointer ${currentnumber===index ? 'text-blue-500' :'text-black-500'} `}
                        
                        onClick={()=>handelClick(index)}>{data.lable}</li>
                    </ul>
                ))
            }
        </div>
        <div className='text-red-500 text-3xl'>
            {
                tablecontent&& tablecontent[currentnumber].content
            }
        </div>
    </div>
  )
}

export default Table