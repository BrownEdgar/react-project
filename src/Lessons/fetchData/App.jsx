import React, { useState, useEffect } from 'react'
import './App.scss'
import PostLoader from '../../components/Loaders/PostLoader'
export default function App() {

  const [post, setPosts] = useState({})
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      //Ստանում ենք տվյալները Promise-ի միջոցով
      setLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
        .then(res => res.json())
        .then(data => setPosts(data))
        .finally(() => setLoading(false))
      // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=40')
      // const data = await response.json()
      // setPosts(data)
    }

    getData()
    console.log('useEffect')
    // Աշխատում է միայն component-ի ծնունդի պահին 1 անգամ
  }, [count])

  const handleDelete = (id) => {
    const result = posts.filter(elem => elem.id !== id);
    setPosts(result)
  }

  return (
    <div>
      <h1>Fetch Data count {count}</h1>
      <button onClick={() => setCount(count + 1)}>plus count</button>

      <div className="Posts">
        {
          !loading ? (
            <PostLoader />
          ) : (
            <div key={post.id} className='Posts__item '>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )


        }

      </div>
    </div>
  )
}
