import AllData from "../Category/data";
import React, { useState } from "react";

const Page = () => {
    const [shellowcopy,setshellowcopy]=useState(AllData)
    const [inputvalue,setinputvalue]=useState()
    const selectdata=(event)=>{
            setinputvalue(event.target.value)     
    }
    if(inputvalue ==="Price A to Z" ){
        shellowcopy.sort((a,b)=>{
            let nameA= a.name;
            let nameB= b.name;
            if(nameA<nameB){
                return -1
            }
        })
    }
    if(inputvalue ==="Price Z to A" ){
        shellowcopy.sort((a,b)=>{
            let nameA= a.name;
            let nameB= b.name;
            if(nameB<nameA){
                return -1
            }
        })
    }
    if(inputvalue ==="High to Low" ){
        shellowcopy.sort((a,b)=>{
            return b.price- a.price
        })
    } 
    if(inputvalue ==="Low to High" ){
        shellowcopy.sort((a,b)=>{
            return a.price- b.price
        })
    }
  return (
    <div className="text-center">
      <div>
        <h1 className="">Category Filter</h1>
        <div className="mt-5 mb-5">
          <select onChange={selectdata} className="border-2">
            <option> Price A to Z</option>
            <option> Price Z to A</option>
            <option> High to Low</option>
            <option> Low to High</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[500px]">
          {shellowcopy.map((data, index) => (
            <div
              key={index}
              className="w-full border-2 flex flex-col items-center justify-center p-4 mb-4"
            >
              <h1 className="text-center">{data.name}</h1>
              <p className="text-center">{data.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
