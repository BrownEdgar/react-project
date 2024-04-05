import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams } from 'react-router-dom'
import './Post.scss'

export default function Post() {
    const [post, setPost] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
    }, [id])
    
  return (
    <div className='Post'>
        <h1>Post N {id}</h1>
        <div className='postBox'>{JSON.stringify(post,null,1)}</div>
        <div className='buttons'>
        <button onClick={()=>navigate(`/posts/${+id-1}`)} disabled={id<2}>prev</button>
        <button onClick={()=>navigate(`/posts/${+id+1}`)} disabled={id>=100}>next</button>

        </div>

    </div>
  )
}
