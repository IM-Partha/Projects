import React, { useState } from 'react'

// const Home = () => {
//     const data = {
//         Punjab: ["Ludhiana", "Patiala", "Amritsar"],
//         Himachal: ["Una", "Mandi", "Kangra"],
//         "Utter Pardesh": ["Lucknow", "Varanasi", "Saharnpur"],
//       };

//       const [state,setstate]=useState()
//       const [city,setcity]=useState()
//       const [newarray,setnewarray]=useState([])
//       function handelsubmit(e){
//         e.preventDefault()
//         setnewarray([...newarray, {s: state, c:city}])
//       }
//       console.log(newarray)
//   return (
//     <div>
//         <form onSubmit={handelsubmit}>
//         <lable>Select State: </lable>
//         <select onChange={(e)=>setstate(e.target.value)}>
//             {Object.keys(data).map((data)=>(
//                 <option >{data}</option>
//             ))}
//         </select>
//         <lable>Select City: </lable>
//         <select onChange={(e)=>setcity(e.target.value)}>
//             {(state)? 
//                 data[state].map((data)=>(
//                     <option >{data}</option>
//                 ))
//                 :
//                 null
//             }
//         </select>
//         <button type='submit'>add</button>
//         </form >
//     </div>
//   )
// }

// export default Home

