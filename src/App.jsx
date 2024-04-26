import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addcounter, getCounter, minusCount } from './features/counter/counterSlice'
import Todos from './components/todos/todos'
import axios from 'axios'
import { addTodos } from './features/todos/todosSlice'

export default function App() {
  const dispatch = useDispatch()
  const x = useSelector(getCounter)
  useEffect(() => {
    axios('https://dummyjson.com/todos')
      .then(res => dispatch(addTodos(res.data)))
  }, [])

  return (
    <div>
      <h1>
        counter : {x}
      </h1>
      <button onClick={() => dispatch(addcounter())}>PLUS</button>
      <button onClick={() => dispatch(minusCount())}>MINUS</button>
      <Todos />
    </div>
  )
}
