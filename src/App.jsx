import React, { useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { addCounter, getCounter } from './features/counter/counterSlice'
import Todos from './components/Todos/Todos'
import axios from 'axios'
import { addTodos, getAsyncTodos } from './features/todos/todosSlice'

export default function App() {

  const counter = useSelector(getCounter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])


  return (
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(addCounter())}>Add counter</button>
      <hr />
      <Todos />
    </div>
  )
}

