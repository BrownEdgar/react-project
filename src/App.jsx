import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addcounter, minusCount } from './features/counter/counterSlice'

export default function App() {
  const dispatch = useDispatch()
  const S = useSelector((state) => state.counter)
  console.log(S);
  return (
    <div>
      <h1>
      counter : {S}
      </h1>
      <button onClick={()=>  dispatch(addcounter())}>PLUS</button>
      <button onClick={()=> dispatch(minusCount())}>MINUS</button>
      </div>
  )
}
