import React, { useState } from 'react'
import './App.scss'
import Loader from '../../assets/loader/my-loader.svg'
export default function App() {
    const [arr, setArr] = useState([
        {
            id: 1,
            img: './photos5/google.png',
            phone: 'Google Pixel',
            model: 'Black',
            price: "10"
        },
        {
            id: 2,
            img: './photos5/samsung.png',
            phone: 'Samsung',
            model: 'S1',
            price: "16"
        },
        {
            id: 3,
            img: './photos5/hts.png',
            phone: 'HTC 10',
            model: '-Black',
            price: "8"
        },
        {
            id: 4,
            img: './photos5/hts10.png',
            phone: 'HTC 10',
            model: '-White',
            price: "18"
        }
    ])
    return (
        
        <div className='Container'>
            <img src={Loader} className='Container__loader' alt="loader" />
            <h1>Our <span>Products</span></h1>
            

            <div className='Container__block'> 
            {arr.map(elem => {
                return (
                    <div key={elem.id} className='Container__block__mobile'>
                        <img src={elem.img} alt={elem.phone} />
                        <div className='Container__block__mobile__info'>
                        <h3>{elem.phone}{elem.model}</h3>
                        <p><i class="bi bi-currency-euro"></i>{elem.price}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
