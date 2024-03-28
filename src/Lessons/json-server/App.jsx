import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

import './App.scss'
import axios from 'axios';

export default function App() {

  const [posts, setPosts] = useState([])

  const getPosts = () => {
    axios('http://localhost:3000/posts')
      .then(res => setPosts(res.data))
  }

  useEffect(() => {
    getPosts()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, userId, body } = e.target;

    const isExists = posts.some(post => post.title.toLowerCase() === title.value.toLowerCase())
    if (isExists) {
      alert("post alredy exist");
      return;
    }
    const data = {
      id: nanoid(7),
      title: title.value,
      userId: userId.value,
      body: body.value,
    }
    axios.post('http://localhost:3000/posts', data)
      .then(res => {
        getPosts();
        e.target.reset()
      })
      .catch(err => console.log(err))


  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' name='title' required />
        <input type="number" placeholder='userId' name='userId' max={10} min={1} required />
        <textarea name="body" id="body" cols="30" rows="5" required></textarea>
        <input type="submit" value="save post" />
      </form>
      <div className="App__posts">
        {
          posts.map(elem => {
            return (
              <div key={elem.id}>
                <h2>{elem.title}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
