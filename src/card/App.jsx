import React from 'react'
import './App.scss'

export default function App() {
  return (
    <div className='card'>
      <div className='card__block'>
        <img src="https://images.unsplash.com/photo-1557555187-23d685287bc3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h2>Maria Carey</h2>
        <h3><span>email:</span>MariamodelCarey@gmail.com</h3>
        <ul className='card__list'>
        <li>
        <i className ="bi bi-instagram"></i>
        </li>
        <li>
        <i className="bi bi-facebook"></i>
        </li>
        <li>
        <i className ="bi bi-youtube"></i>
        </li>
        <li>
        <i className="bi bi-twitter"></i>
        </li>
        <li>
        <i className ="bi bi-linkedin"></i>
        </li>
      </ul>
      </div>
      
    </div>
  )
}