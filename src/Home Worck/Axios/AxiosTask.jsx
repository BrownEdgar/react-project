import React, { useEffect, useState } from 'react'
import './AxiosTask.scss'
import axios from 'axios'

export default function AxiosTask() {
  const [tag, setTag] = useState('todos')
  const [data, setData] = useState({
    data: [],
    target: 'todos',
    _limit: 5
  })
  useEffect(() => {
    axios({
      baseURL:import.meta.env.VITE_DB_URL,
      url: data.target,
      timeout:0,
      params: {
        _limit: data._limit,
      }
    })
      .then(res =>setData(previousState => {
          return { ...previousState, data: res.data }
        })
        )
console.log('asd')
  }, [tag])

   let TodoBTN ='todos' ;
   let PostBTN = 'posts';
   let ComBTN = 'comments';
   let UserBTN = 'users';

  const BTN = (name) => {
    setData(previousState => {
      return { ...previousState, target: name }
    })
    setTag(name)
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
          <button disabled={tag===TodoBTN?true:false} onClick={()=>BTN(TodoBTN)}>Todos</button>
          <button disabled={tag===PostBTN?true:false} onClick={()=>BTN(PostBTN)}>Posts</button>
          <button disabled={tag===ComBTN?true:false} onClick={()=>BTN(ComBTN)}>Comments</button>
          <button disabled={tag===UserBTN?true:false} onClick={()=>BTN(UserBTN)}>Users</button>
        </div>
      </div>
    </div>
  )
}
