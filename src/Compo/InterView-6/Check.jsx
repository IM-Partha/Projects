
import { useState } from "react"
  export default function Check(){
    const [shellowcopy,setshellowcopy]=useState([
      {name: "Ram" , checked: false},
      {name: "shyam" , checked: false},
      {name: "Rahul" , checked: false}
    ])


    function handelCheckbox(gateID){
    shellowcopy[gateID].checked =! shellowcopy[gateID].checked

      setshellowcopy([...shellowcopy])

     console.log(shellowcopy)
      
    }

    function handelRemove(gateID){
    //  let tepm= shellowcopy.filter((data,index)=>index!==gateID)
    //  setshellowcopy(tepm)

      setshellowcopy((pre)=>pre.filter((data,index)=>index!==gateID))
    }
    return (
      <div>
        <div>
              {
                shellowcopy&&shellowcopy.map((data,index)=>(
                  <ul key={index}>
                    <li>
                      <input type="checkbox" checked={data.checked}  onClick={()=>handelCheckbox(index)}  />
                      {data.name}
                      {
                        data.checked? 
                        <button onClick={()=>handelRemove(index)}>REMOVE</button>
                        :
                        null
                      }
                      </li>
                  </ul>
                ))
              }
        </div>
      </div>
    )
  }

  