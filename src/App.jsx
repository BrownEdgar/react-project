import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Todos from './components/Todos/Todos'
import { increment,decrement, getCounter} from './features/counter/counterSlice'
import { getAsyncTodos } from './features/todos/todosSlice'

export default function App() {
  const state = useSelector(getCounter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])

  return (
    <div className='App'>
      <h3>counter : {state}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <hr/>
      <Todos/>
    </div>
  )
}
