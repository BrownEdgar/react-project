import React from 'react'
import './Card.scss'

export default function Card() {
  return (
    <div className='Card'>


      <div className='Card__block'>
        <img src="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg" alt="" />
        <h2>Ella Smith</h2>
        <h3><span>email:</span> ellaProduser@gmail.com</h3>
        <ul className='Card__list'>
          <li>
            <i className="bi bi-instagram"></i>
          </li>
          <li>
            <i className="bi bi-facebook"></i>
          </li>
          <li>
            <i className="bi bi-youtube"></i>
          </li>
          <li>
            <i className="bi bi-twitter"></i>
          </li>
          <li>
            <i className="bi bi-linkedin"></i>
          </li>
        </ul>
      </div>


    </div>
  )
}
