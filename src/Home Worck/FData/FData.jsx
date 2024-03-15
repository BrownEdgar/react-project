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

  const deleteItem = (e) =>{
    e.target.parentNode.remove()
  }
  const completToggle = (e) =>{
    if(e.target.tagName === 'DIV'){
        e.target.children[1].className =='red'?
        e.target.children[1].classList.replace('red','green'):
        e.target.children[1].classList.replace('green','red')
    } 
  }
  return (
    <div className='FData'>
        {
            post.map(elem=>{
                return <div key ={elem.id} onClick = {completToggle}>
                        <p className='info'>{elem.id} | {elem.title}</p>
                        <p className={elem.completed?'green':'red'}></p>
                        <button className='remove' onClick = {deleteItem}>X</button>
                </div>
            })
        }
    </div>
  )
}

