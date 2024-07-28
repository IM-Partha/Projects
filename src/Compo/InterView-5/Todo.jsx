// import React, { useState } from "react";

// function Todo(){

//     const [task,settask]=useState('')
//     const [addtask,setaddtask]=useState([])

//     function handelClick(){
//         setaddtask(data=>[...data,task])

//     }
//     function handelremove(e){
//         setaddtask(preveTask=>preveTask.filter((_,i)=>(i !== e)))

//     }
// return (
//     <div>
//         <div>
//             <h1 className='text-2xl mb-5'>TODO LIST</h1>
//             <div>
//                 <input  onChange={(e)=>settask(e.target.value)} className='w-[300px] p-1' type='text' placeholder='Add Task'/>
//                 <button onClick={handelClick} className='p-2 '>Add</button>
//             </div>
//             <div >
//                 {
//                     (addtask)?
//                     addtask.map((data, index)=>(
//                         <div >
//                             <li key={index}>{data} <button onClick={()=>handelremove(index)} className='p-1 bg-red-500 text ml-5 text-white rounded'>Remove</button></li>

//                         </div>
//                     )):
//                     null
//                 }
//             </div>
//         </div>
//     </div>
// )
// }

// export default Todo

import React, { useState } from "react"
export default function Todo (){

  const [text,settext]=useState([])
  const [add,setadd]=useState([])

  function handelClick(){
    setadd((pre)=>[...pre,text])
    console.log(add)
  }


  function handekremove(gateID){
      setadd((pre)=>pre.filter((_,index)=>(gateID!==index)))
  }
      return(
        <div>
          <div>
            <input onChange={(e)=>settext(e.target.value)} type="text"/>
            <button onClick={handelClick}>Add </button>
          </div>
          <div>
              {
                add.map((_,index)=>(
                  <ul key={index}>
                    <li>{_}{" "}<button onClick={()=>handekremove(index)}>REMOVE</button></li>
                  </ul>
                ))
              }
          </div>
        </div>
      )
}
