import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Blog.scss'

export default function Blog() {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        axios('http://localhost:3000/posts')
        .then(res=>setBlog(res.data))
      }, [])
    return (
        <div className='Blog'>
            <div className='top-image'>
                <div className='over'></div>
                <h1>BLOG</h1>
            </div>
            <div className='box'>

                {
                    blog.map(elem => {
                        return <Link 
                        to={`${elem.id}`}
                        key={elem.title}
                        >
                            <img src={elem.poster} alt="" />
                            <h2>{elem.title}</h2>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
