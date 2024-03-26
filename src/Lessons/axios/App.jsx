import React, { useState, useEffect } from 'react';
import Title from '../../UI/Title/Title';

import instance from './instance';
console.log(import.meta.env.VITE_PORT)
console.log(import.meta.env.VITE_DB_URL)


export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios('https://jsonplaceholder.typicode.com/posts?_limit=4')
    // axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4')
    // axios('https://jsonplaceholder.typicode.com/posts', {
    //   params: {
    //     _limit: 4,
    //     _start: 12
    //   }
    // })
    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'todos',
    //   params: {
    //     _limit: 5
    //   },

    // })
    // axios.all([
    //   axios('https://jsonplaceholder.typicode.com/posts?_limit=4&_start=19'),
    //   axios('https://jsonplaceholder.typicode.com/users?_limit=3')
    // ])
    //   .then(([posts, users]) => {
    //     console.clear()
    //     const data = users.data.map(user => {
    //       user.posts = posts.data.filter(post => post.userId === user.id);
    //       return {
    //         id: user.id,
    //         posts: user.posts,
    //         name: user.name
    //       }
    //     })
    //     setPosts(data)
    //   })
    instance('comments', {
      params: {
        _limit: 4
      }
    })
      .then(res => setPosts(res.data))
  }, [])


  return (
    <div className='App'>
      <Title title='Axios example' variant='pink' align={'center'} />

      <pre>
        {JSON.stringify(posts, ['name'], 3)}
      </pre>
    </div>
  )
}
