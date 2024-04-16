import React from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom'
export default function Menu() {
    return (
        <header>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                
            </ul>
        </header>
    )
}
