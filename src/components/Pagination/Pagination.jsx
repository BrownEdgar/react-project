import React from 'react';
import './Pagination.scss'

export default function Pagination({ total, perpage, setPages, page }) {
  const list = [];
  for (let i = 1; i <= Math.ceil(total / perpage); i++) {
    list.push(i)
  }
  return (
    <div className='Pagination'>
      <ul>
        {
          list.map(item => {
            return <li className={`${item === page ? "active" : ''}`} key={item}>
              <a href="#" onClick={() => setPages(item)}>{item}</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}
