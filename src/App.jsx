import React from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { addCounter } from './features/counter/counterSlice'

export default function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(addCounter())}>Add counter</button>
    </div>
  )
}

