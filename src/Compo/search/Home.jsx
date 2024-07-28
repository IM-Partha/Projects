import React, { useState } from 'react'

export const Home = () => {
    const [Listitem,setlistitem]=useState(["Apple","Orange","Mango","Bannana"])
    const [shallowcopy,setshallowcopy]=useState(Listitem)
    const [Gateitem,setgateitem]=useState("")
    const handegatedata=(event)=>{
        setgateitem(event.target.value)
        if(event.target.value){
            let newData= shallowcopy.filter((item)=>(item.toLowerCase().includes(event.target.value.toLowerCase())))
            console.log(newData)
            setlistitem(newData)
        }
        else{
            setlistitem(shallowcopy)
        }
    }
  return (
    <div className='text-center mt-[100px]'>
        <div>
            <input value={Gateitem} onChange={(e)=>handegatedata(e)} type='text' placeholder='search'/>
        </div>
        {
            Listitem.map((item,index)=>(
                <ul key={index}>
                    <li>{item}</li>
                </ul>
            ))
        }
    </div>
  )
}
