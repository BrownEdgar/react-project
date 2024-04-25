import React from 'react'
import { useSelector } from 'react-redux'
import { getAllTodos } from '../../features/todos/todosSlice'
import './Todos.scss'

export default function Todos() {
  const todos = useSelector(getAllTodos)

  return (
    <div className='Todos'>
      {
        todos.map(elem => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}
