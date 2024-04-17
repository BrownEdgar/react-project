import React from 'react'
import "./Blog1.scss"
import { useLocation } from 'react-router-dom'
export default function Blog1() {
   const { state } =  useLocation()
  return (
    <div className='Blog1'>
<h1>{state.name}</h1>
<img className='Blog1__foto' src={state.photo}/>
<p className='Blog1__radius'>Radius {state.radius} km</p>
<p>{state.about}</p>
    </div>
  )
}
