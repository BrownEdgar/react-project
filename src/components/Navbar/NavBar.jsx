import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import ROUTES from '../../routes'

export default function NavBar() {
  return (
    <header> 
      <div className='logo'>
      <Link to={ROUTES.HOME}>Logo</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACT}>Contact</Link>
          </li>
          <li>
            <Link to={ROUTES.BLOG}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
