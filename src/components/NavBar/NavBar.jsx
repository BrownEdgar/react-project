import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './NavBar.scss'
import ROUTES from '../../routes'

const setActiveClass = ({ isActive }) => isActive ? 'active__link' : ''

export default function NavBar() {
  return (
    <header>
      <div className="logo">
        <NavLink to={ROUTES.HOME}>LOGO</NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME} className={setActiveClass}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT} className={setActiveClass}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT} className={setActiveClass}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.POSTS} className={setActiveClass}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG} className={setActiveClass}>Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
