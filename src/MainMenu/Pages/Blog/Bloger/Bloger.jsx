import React, { useState, useEffect } from 'react'
import './Bloger.scss'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Bloger() {
    const [bloger, setBloger] = useState([])
    const [claps, setClaps] = useState(0)
    useEffect(() => {
        axios('http://localhost:3000/posts')
            .then(res => setBloger(res.data))
    }, [claps])

    const { id } = useParams()

   
    const clapNum = (idNumber,clapsNumber)=>{
        axios.patch(`http://localhost:3000/posts/${idNumber}`,{claps:clapsNumber+1})
        .then(res => setClaps(clapsNumber))
    }
    
    return (
        <div className='Bloger'>
            <div className='active'>
                {
                    bloger.map(elem => {
                        if (elem.id === id) {
                            return <div key={elem.id}>
                                <h1>{elem.title}</h1>
                                <img src={elem.poster}  />
                                <p>{elem.descOne}</p>
                                <p>{elem.descTwo}</p>
                                <p>{elem.descThree}</p>
                                <ul>
                                    {elem.list.map(el => { return <li key={el}>{el}</li> })}
                                </ul>
                                <p>{elem.descOne}</p>
                                <hr />
                                <div className='claps' >
                                <i onClick={()=>clapNum(elem.id,elem.claps)} className="bi bi-hand-thumbs-up"></i>
                                    <h3>
                                        {elem.claps}
                                    </h3>
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
