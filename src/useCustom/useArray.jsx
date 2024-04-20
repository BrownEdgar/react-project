import React, { useEffect, useState } from 'react'

export default function useArray({quantity,min,max}) {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const arr =Array.from({length:quantity},()=>Math.round(Math.random()* (max-min)+min))
  
    
    console.log(arr);
    setData(arr)
  },[quantity])
  
  const getSum = () =>{
    const sum =data.reduce((acc,cv)=>acc+cv,0);
    return sum;
  }

  const  getSord = ()=>{
    const sorty = data.toSorted((a,b)=>a-b)
    return setData(sorty)
}
  
  return [data,{getSum, getSord}]
    
}
