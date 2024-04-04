import React from 'react'
import { useReducer, useEffect } from 'react';

import './Posts.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-posts': return action.payload


    default: return state;

  }

}

export default function Posts() {
  const [state, dispatch] = useReducer(reducer, []);
  console.log(state)
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(res => dispatch({ type: 'add-posts', payload: res.data }))
  }, [])

  return (
    <div className='Posts'>
      {
        state.map(elem => {
          return <Link
            to={`${elem.id}`}
            key={elem.id}
            className='Posts__Link'> {elem.title}</Link>
        })
      }
    </div>
  )
}
