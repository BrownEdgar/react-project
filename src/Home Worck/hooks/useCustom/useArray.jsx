import React ,{useState} from 'react'
import { useEffect } from 'react'

export default function useArray({quantity,min,max}) {
    const [data, setData] = useState([])
    useEffect(() => {
        const arr = Array.from({length:quantity}, ()=>Math.round(Math.random() * (max - min)+min))
        setData(arr)
    }, [quantity])
    
    const getSum = () => {
        const sum = data.reduce((acc,next) =>acc+next,0)
        return sum
    }
    const update = (x,y) => {
       const ased = data.toSpliced(x,1,y)
      return setData(ased)
    }
    const sorted = ()=>{
        const sortPlus = data.toSorted((a,b)=>a-b)
        return setData(sortPlus)
    }
  return (
   [data,{getSum,update,sorted}]
  )
}
