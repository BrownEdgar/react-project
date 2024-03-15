import React, { useState,useEffect} from 'react'
import './App.scss'

export default function App() {
    const [posts, setPosts] = useState([])
    useEffect(()=> {
    const getData = ()=>{
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=40")
        .then(res => res.json())
        .then(data => setPosts(data))
    }

    getData()
    
 },[]) 
 const deleteTitle = (id) => {
    const result = posts.filter(elem => elem.id !== id);
    setPosts(result)
 }  
  return (
    <div className='Container'> 
        <h1>Posts</h1>
        
        <div className='Posts'>
            {
                posts.map(elem =>{
                    return (
                        <div key ={elem.id} className='Posts__id'>
                            <button onClick={()=>deleteTitle(elem.id)}>&#10006;</button>
                            <div className={elem.completed === true ? 'green': 'red'} ></div>
                            <p>{elem.id}</p>
                           <h2>{elem.title}</h2> 
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
