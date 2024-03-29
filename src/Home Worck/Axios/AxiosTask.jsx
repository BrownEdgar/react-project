import React, { useEffect, useState } from 'react'
import './AxiosTask.scss'
import axios from 'axios'

export default function AxiosTask() {
  const [data, setData] = useState({
    data: [],
    target: 'todos',
    _limit: 5
  })
  useEffect(() => {
    axios({
      baseURL:import.meta.env.VITE_DB_URL,
      url: data.target,
      params: {
        _limit: data._limit,
      }
    })
      .then(res =>setData(previousState => {
          return { ...previousState, data: res.data }
        })
        )
  }, [data.target])

   

  const changeTarget = (name) => {
    setData(previousState => {
      return { ...previousState, target: name }
    })
  }
  
  return (
    <div className='AxiosTask'>
      <h1 className='AxiosTask__title'>GET AXIOS</h1>
      <div className='AxiosTask__box'>
        <pre>
          {JSON.stringify(data.data, null, 3)}
        </pre>
        <hr />
        <div className='buttons'>
          <button  onClick={()=>changeTarget('todos')}>Todos</button>
          <button  onClick={()=>changeTarget('posts')}>Posts</button>
          <button  onClick={()=>changeTarget('comments')}>Comments</button>
          <button  onClick={()=>changeTarget('users')}>Users</button>
        </div>
      </div>
    </div>
  )
}
