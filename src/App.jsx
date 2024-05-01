import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addCounter, fonction, foo, getCounter } from './features/counter/counterSlice'
import './App.scss'
import Todos from './components/Todos/Todos'
import axios from 'axios'
import { addTodos } from './features/todos/todosSlice'

export default function App() {
  const counter = useSelector(getCounter)
  const dispatch = useDispatch() 
  console.log(counter)

  useEffect(()=>{
    axios('https://jsonplaceholder.typicode.com/todos?_limit=22')
    .then(res=>dispatch(addTodos(res.data))) 
  },[])
  return (
    <div>
      <h1>counter:{counter}</h1>
      <button onClick={()=>dispatch(addCounter())}>Plus</button>
      <button onClick={()=>dispatch(foo())}>Minus</button>
      <button onClick={()=>dispatch(fonction())}>Reset</button>
       <hr />     
       <Todos />
    </div>
  )
}


    