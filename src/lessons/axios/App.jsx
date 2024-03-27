import React, { useState, useEffect } from 'react';
import Title from '../../Ul/Title/Title';
import axios from 'axios'
import instance from './instance';


export default function App() {
   const [posts,setPosts] = useState([])

   useEffect(()=>{
    // axios('https://jsonplaceholder.typicode.com/posts?_limit=4')
    // axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4')
    // axios('https://jsonplaceholder.typicode.com/posts',{
    //   params:{
    //     _limit:7,
    //     _start:7
    //   }
    // })
    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com',
    //   url: 'posts',
    //   params:{
    //     _limit:7
    //   },
    //   timeout:1000
    // })
    // .then(res => {
    //   console.clear()
    //   setPosts(res.data)
    // })
     instance('posts',{
      params:{
        _limit:7
      }
     })
     .then(res => setPosts(res.data))
   },[])


  return (

    <div className='App'>
   <Title title='Axios example' variant='pink'  align={'center'}/>     

   <pre>
    {JSON.stringify(posts,['title', 'id'],3)}
   </pre>

    </div>
  )
}
