import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

import './Post.scss'
import ROUTES from '../../routes';

export default function Post() {
  const [post, setPost] = useState({})
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    if (id <= 100) {
      axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
    }
  }, [id])

  return (
    <div className='Post'>
      <h2> POST N {id} </h2>
      <pre>{JSON.stringify(post, null, 1)}</pre>
      <div className="buttons">
        <button onClick={() => navigate(`/posts/${+id - 1}`)} disabled={id <= 0}>prev</button>
        <button onClick={() => navigate(`/posts/${+id + 1}`)}>next</button>
      </div>
    </div>
  )
}
