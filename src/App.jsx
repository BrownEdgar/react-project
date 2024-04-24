import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment,decrement} from './features/counter/counterSlice'

export default function App() {
  const state = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      <h3>counter : {state}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}
