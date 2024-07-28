import React, { useEffect, useState } from "react";

export default function Homepage() {
  const [Product, setproduct] = useState([]);
  const [page, setpage] = useState(1);
  const Gateproducts = async () => {
    const datas = await fetch(`https://dummyjson.com/products?limit=100`);
    const result = await datas.json();
    if (result && result.products) {
      setproduct(result.products);
    }
  };

  useEffect(() => {
    Gateproducts();
  }, []);
  useEffect(() => {
    console.log(Product);
  }, [Product]);

  const selectPageHandler=(slectpage)=>{
    if(slectpage >= 1 && slectpage <= Product.length / 10 && slectpage !== page){
        setpage(slectpage)
    }

   console.log(Product.length /10)     
  }
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-center">
        {Product.slice(page * 10 - 10, page * 10).map((item, index) => (
          <div key={index} className="flex flex-col border shadow-md w-[200px] p-5 ">
            <img className="w-[200px] h-[200px]" src={item.thumbnail} />
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-5 text-2xl cursor-pointer ">
        <span onClick={()=>selectPageHandler(page-1)} >◀️</span>
        {[...Array(Product.length /10)].map((d,index)=>{
            return <span className="border p-3" key={index} onClick={()=>selectPageHandler(index + 1)}>{index + 1}</span>
        })}
        
        <span onClick={()=>selectPageHandler(page+1)}>▶️</span>
      </div>
    </div>
  );
}
