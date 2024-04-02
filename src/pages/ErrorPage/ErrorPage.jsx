import React from 'react'
import './ErrorPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../../routes'

export default function ErrorPage() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate({ pathname: ROUTES.HOME, })
  }

  return (
    <div className='ErrorPage'>
      <Link to={ROUTES.HOME}>go home</Link>
      <button onClick={goHome}>go back with button</button>
      <h1>404 | <em>PAGE not found</em></h1>
    </div>
  )
}
