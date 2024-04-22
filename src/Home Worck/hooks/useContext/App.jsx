import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import A from './A'

export const MyContext = createContext(8)
export default function App() {

  const [posts, setPosts] = useState([])
useEffect(() => {
  axios('https://jsonplaceholder.typicode.com/posts')
  .then(res=>setPosts(res.data))
}, [])

  return (
    <div>
        <MyContext.Provider value={posts}>
          <A/>
        </MyContext.Provider>
            
    </div>
  )
}
