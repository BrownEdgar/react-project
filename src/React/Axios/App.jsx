import React, { useEffect } from 'react'
import './App.scss'
import { useState } from 'react'
import axios from 'axios'
import Title from '../../UI/Title/Title'
import Button from '../../UI/Title/Button/Button'

export default function App() {
  const [state, setState] = useState({
    data: [],
    target: 'todos',
    _limit: 5
  })
  const [post, setPost] = useState([])
  useEffect(() => {

    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: state.target,
      params: {
        _limit: state._limit
      }
    })
      .then(res => {
        console.clear()
        setPost(res.data)
      }
      )
  }, [state.target])
  const Change = () => {
    const newTarget = state.target === 'todos' ? 'comments' : 'todos'
    setState(prevState => ({
      ...prevState,
      target: newTarget
    }))
  }

  return (
    <div className='App'>
      <Title title="AXIOS" color='1' />
      <pre className='App__posts'>
        {JSON.stringify(post, null, 2)}
      </pre>
      <button className='custom-btn btn-10' onClick={Change}>Change Posts</button>
    </div>
  )
}
