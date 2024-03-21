import React from 'react';
import './Pagenation.scss'

export default function Pagination({ total, perPage, setPages }) {
    const list = [];
    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        list.push(i);
    }
    return (
        <div className='Pagination'>
            <ul>
               {list.map(item => (
                    <li key={item}>
                        <a href="#" onClick={() => setPages(item)}>{item}</a>
                    </li>
               ))}
            </ul>
        </div>
    );
}