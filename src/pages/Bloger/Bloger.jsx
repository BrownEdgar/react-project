import React from 'react'
import { useParams } from 'react-router-dom'
import './Bloger.scss'

export default function Bloger() {
  const { id } = useParams()
  return (
    <div className='Bloger'>
      <div className="Bloger__poster">
        <h1> BLOG N {id}</h1>
      </div>
      <section className='Bloger__wrapper'>

      </section>
    </div>
  )
}
