import React from 'react'
import './Home.scss'

export default function Home({ title }) {
  return (
    <div className='Home'>
      <div className="Home__main">
        <h1>{title}</h1>
        <div className="Home__content">
          <h1> React router dom <br /><span>create </span> your page whith us</h1>
        </div>
      </div>

    </div>
  )
}
