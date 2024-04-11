import React, { useReducer, useEffect } from 'react'
import './Blog.scss'
import blogReducer, { initialState } from './blogReducer'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Blog() {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  useEffect(() => {
    axios('http://localhost:3000/blogs')
      .then(res => dispatch({ type: 'save-blogs', payload: res.data }))
  }, [])

  return (
    <div className='Blog'>
      {
        state.data.map(elem => {
          return (
            <Link
              className="Blog__item"
              key={elem.id}
              to={`${elem.id}`}
              state={elem}
            >
              <img src={elem.poster} />
              <h2>{elem.title}</h2>
            </Link>
          )
        })
      }
    </div>
  )
}
