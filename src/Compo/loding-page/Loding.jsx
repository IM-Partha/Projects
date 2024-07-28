import React, { useEffect, useState }  from "react";

export default function Loding(){
    const [loding,setloding]=useState(false)
    const [products,setproducts]=useState([])
    const [count,setcount]=useState(0)

    async function gateData (){
        try{
            setloding(true)
        const a = await fetch(`https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20}`)
        const data = await a.json()
        setproducts((pre)=>[...pre,...data.products])
        
        }
        catch(e){
            setloding(false)
        }
    }
    useEffect(()=>{
        gateData()
    },[count])



    if(loding){
        <div>Please Wait</div>
    }
    return(

        
        <div>
            <div className="flex flex-wrap mx-10">
                {
                    products&& products.map((data,index)=>(
                        <div className="p-2" key={index} >
                            <img className=" border border-black w-[200px] h-[200px]" src={data.thumbnail} alt="" />
                        <p>{data.title.slice(0,10)}</p>
                        </div>
                    ))
                }
            </div>


            <div>
   
    
                   <button  onClick={()=>setcount(count+1)} className="bg-blue-500 text-white p-2 rounded-lg">Lode more</button>
             
            
                
            </div>
        </div>
    )
}