import React, { useState } from 'react'
import'./App.scss'

export default function App() {
   const [posts, setPosts] = useState([])
   const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=40')
        const data =await response.json()
        setPosts(data)
   

   }
   const handleDelete = (id) => {
       const result = posts.filter(elem => elem.id !==id)
       setPosts(result)
   }
  return (
    <div>
    <h1>Fetch Posts</h1>
    <button className='App__button' onClick={getData}>Get Posts</button>
    <div className="posts">
      {
        posts.map(elem =>{
          return(
            <div key ={elem.id} >
              <button onClick={() =>handleDelete(elem.id)}>&#10006;</button>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          )
        })
      }
    </div>
    </div>
    
  )
}
