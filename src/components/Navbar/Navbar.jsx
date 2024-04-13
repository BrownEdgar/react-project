import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
             <li>
             <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
             <NavLink to={'/Blogs'}>Blogs</NavLink>
              </li>
        </ul>
    </header>
  )
}
