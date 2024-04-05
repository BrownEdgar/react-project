import React from 'react'
import NavBar from '../NavBar'
import { Outlet} from 'react-router-dom'
import './MainLayouts.scss'
export default function MainLayouts() {
  return (
    <div className='MainLayouts'>
        <NavBar/>
        <Outlet/>
        <footer>
            <li><em>Name</em> : Example</li>
            <li><em>Email</em> : Example@gmail.com</li>
            <li><em>Phone</em> : +748-456-47-445-47</li>
        </footer>
    </div>
  )
}
