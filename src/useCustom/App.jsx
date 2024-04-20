import React from 'react'
import './App.scss'
import useCount from './useCount'
import useArray from './useArray'
import { json } from 'react-router-dom'



export default function App() {
  const[count,{minus,plus,addRandom}] = useCount({initialValue:1, min:1,max:111})
  const [data,{getSum,getSord}] = useArray({quantity:5,min:77,max:777})
  return (
    <div className='hooks'>
      <h1>{JSON.stringify(data)}</h1>
      <h1>Count:{count}</h1>
      <h1>getSum:{getSum()}</h1>
      <button onClick={minus}>Minus</button>
      <button onClick={plus}>Plus</button>
      <button onClick={addRandom}>Random</button>
      <button onClick={getSord}>sort</button>
    
    </div>
  )
}
  