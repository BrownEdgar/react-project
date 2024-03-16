import React, { useState, useEffect } from 'react'
import './FData.css'

export default function FData() {
  const [post, setPost] = useState([])

  useEffect(() => {
    const getData = async () => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=40')
        .then(res => res.json())
        .then(data => setPost(data))
    }
    getData()
  }, [])

  const deleteItem = (e, id) => {
    e.stopPropagation()
    const result = post.filter(elem => elem.id !== id);
    console.log(result)
    setPost(result)
  }
  const completToggle = (id) => {
    const result = post.map(elem => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    setPost(result)
  }
  return (
    <div className='FData'>
      {
        post.map(elem => {
          return <div key={elem.id} onClick={() => completToggle(elem.id)}>
            <p className='info'>{elem.id} | {elem.title}</p>
            <span className={elem.completed ? 'green' : 'red'}></span>
            <button className='remove' onClick={(e) => deleteItem(e, elem.id)}>X</button>
          </div>
        })
      }
    </div>
  )
}

