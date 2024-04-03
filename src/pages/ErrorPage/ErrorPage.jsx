import React from 'react'
import './ErorPage.scss'
import { Link } from 'react-router-dom'
import ROUTES from '../../routes'

export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
    <Link to={ROUTES.HOME}>go home</Link>
    <h1>Error 404 | <em>Page not found</em></h1>
    
    </div>
  )
}
