import React, { useState, useEffect } from 'react'
import './Bloger.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Bloger() {
    const [bloger, setBloger] = useState([])
    const [asd, setAsd] = useState({})
    useEffect(() => {
        axios('http://localhost:3000/posts')
            .then(res => setBloger(res.data))
    }, [])

    const { id } = useParams()
   
    const clapNum = ()=>{
        axios({
            baseURL:'http://localhost:3000',
            url: 'posts/1',
            
          })
        .then(res => console.log(res.data))
    }
    
    return (
        <div className='Bloger'>
            <div className='active'>
                {
                    bloger.map(elem => {
                        if (elem.id === +id) {
                            return <div key={elem.id}>
                                <h1>{elem.title}</h1>
                                <img src={elem.poster} alt="" />
                                <p>{elem.descOne}</p>
                                <p>{elem.descTwo}</p>
                                <p>{elem.descThree}</p>
                                <ul>
                                    {elem.list.map(el => { return <li key={el}>{el}</li> })}
                                </ul>
                                <p>{elem.descOne}</p>
                                <hr />
                                <div className='claps' onClick={clapNum}>
                                <i className="bi bi-hand-thumbs-up"></i>
                                    <span>
                                        {elem.claps}
                                    </span>
                                </div>

                            </div>

                        }
                    })
                }
            </div>
            <div className='blog-nav'>
                {
                    bloger.map(elem => {
                        return <Link className='link' key={elem.id} to={`../blog/${elem.id}`}>
                            <img src={elem.poster} alt="" />
                            <h3>{elem.title}</h3>
                        </Link>
                    })
                }
            </div>

        </div>
    )
}
