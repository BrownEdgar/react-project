import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

import './App.scss'
import axios from 'axios';
import Modal from '../../components/Modal/Modal';

export default function App() {

  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [editPostId, setEditPostId] = useState(null)

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
      .then(() => {
        getPosts();
        e.target.reset()
      })
      .catch(err => console.log(err))
  }

  const deleteById = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(res => {
        setIsOpen(true);
        setTimeout(setIsOpen, 3010, false)
        getPosts();
      })
  }
  const setediatablePostId = (id) => {
    setEditPostId(id)
  }
  const chagePostSubmit = (e) => {
    e.preventDefault();
    if (editPostId === null) return;
    const { title, body } = e.target;
    const newPost = {
      title: title.value,
      body: body.value,
    }
    axios.patch(`http://localhost:3000/posts/${editPostId}`, newPost)
      .then(res => getPosts())
      .finally(() => setEditPostId(null))
  }

  return (
    <div className='App'>
      {isOpen ? <Modal /> : null}
      <form onSubmit={handleSubmit} className='App__add'>
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
                {(editPostId === elem.id) ? (
                  <form className='App__edit' onSubmit={chagePostSubmit}>
                    <textarea name="title" id="title" cols="30" rows="1" defaultValue={elem.title}>
                    </textarea>
                    <textarea name="body" id="body" cols="30" rows="6" defaultValue={elem.body}>

                    </textarea>
                    <button type="button" className='btn btn-cancel' onClick={() =>
                      setEditPostId(null)}>cancel</button>
                    <button type="submit" className='btn btn-save'>save</button>

                  </form>
                ) : (
                  <>
                    <button className='btn btn-delete' onClick={() => deleteById(elem.id)}>
                      <i className="bi bi-x-octagon"></i>
                    </button>
                    <h2>{elem.title}</h2>
                    <p>{elem.body}</p>
                    <button className='btn btn-edit' onClick={() => setediatablePostId(elem.id)} >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </>
                )
                }

              </div>
            )
          })
        }
      </div >
    </div >
  )
}


