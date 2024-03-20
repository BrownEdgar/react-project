import React, { useState } from 'react'
import "./OurProducts.scss";
import Loader from './loader/spiner.svg'

export default function OurProducts() {
    const [loading, setLoading] = useState(true)
    const [phones, setPhones] = useState([
        {
            img: 'https://i.ebayimg.com/images/g/oPoAAOSwKT1lxODB/s-l1600.jpg',
            text: 'Google Pixel - Black',
            price: '€ 10'
        },
        {
            img: 'https://www.refurbished.store/cache/images/samsung-galaxy-s7-edge-rose-goud_600x600_BGresize_16777215-tj.png',
            text: 'Samsung S7',
            price: '€ 16'
        },
        {
            img: 'https://techcrunch.com/wp-content/uploads/2015/02/m9-3.png',
            text: 'HTC 10 - Black',
            price: '€ 8'
        },
        {
            img: 'https://drop.ndtv.com/TECH/product_database/images/1111201612207PM_635_htc_bolt.jpeg',
            text: 'HTC 10 - White',
            price: '€ 18'
        }
    ])
    setTimeout(() => {
        setLoading(false)
    }, 500);
    return (
        <div className='OurProducts'>
            <h1 className='OurProducts__title'>
                Our <a>Products</a>
            </h1>
            <div className='telephones'>
                {
                    phones.map(phone => {
                        return loading
                            ? <img className='telephones__loader' src={Loader} alt="" />
                            : (<div key={phone.text} className='telephones__phone'>
                                <img src={phone.img} alt="" />
                                <p>{phone.text}</p>
                                <em>{phone.price}</em>
                            </div>)
                    }
                    )
                }
            </div>
        </div>
    )
}
