import React, { useReducer } from 'react'
import './Blog.scss'
import blogReducer, { initialState } from './blogReducer'
import { Link } from 'react-router-dom'

export default function Blog() {
  const [state, dispatch] = useReducer(blogReducer, initialState)
  return (
    <div className='Blog'>
      {
        state.data.map(elem => {
          return (
            <Link className="Blog__item" key={elem.id} to={`${elem.id}`}>
              <img src={elem.poster} />
              <h2>{elem.title}</h2>
            </Link>
          )
        })
      }
    </div>
  )
}
