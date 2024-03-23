import React from 'react';
import './Pagination.scss'


export default function Pagination({ total, perpage, setPages, page }) {

  return (
    <div className='Pagination2'>
      <ul>
        {
          new Array(Math.ceil(total / perpage))
            .fill()
            .map((_, index) => index + 1)
            .map(item => {
              return <li className={`${item === page ? "active" : ''}`} key={item}>
                <a href="#" onClick={() => setPages(item)}>{item}</a>
              </li>
            })
        }
      </ul>
    </div>
  )
}
