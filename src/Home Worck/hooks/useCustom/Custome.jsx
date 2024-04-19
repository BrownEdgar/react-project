import React from 'react'
import useArray from './useArray'
import useCount from './useCount'
import usePassword from './usePassword'

export default function Custome() {

const [count , {minus,plus,random}] = useCount({initalValue:1,min:1,max:100})
const [data , {getSum , update ,sorted}] = useArray({quantity:5,min:1,max:100})
const [code , {generateCode}] = usePassword(15)

  return (
    <div className='Custome'> 
    
        <h1>Count: {JSON.stringify(code)}</h1>
        <button onClick={generateCode}>code</button>
        <hr/>
        <h1>Count: {count}</h1>
        <button onClick={minus}>minus</button>
        <button onClick={plus}>plus</button>
        <button onClick={random}>random</button>
        <hr/>
        <h1>Array : {JSON.stringify(data)}</h1>
        <h1 >getSum : {getSum()} </h1>
        <button onClick={()=>update(0,0)}>update</button>
        <button onClick={sorted}>sort + </button>
    </div>
  )
  
}
