import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import A from './A'
import './App.scss'

export const MyContext = createContext(17)
export default function App() {

  const [data, setData] = useState([])
useEffect(() => {
  axios('https://jsonplaceholder.typicode.com/todos')
  .then(res=>setData(res.data))
}, [])

  return (
    <div>
        <MyContext.Provider value={data}>
          <A/>
        </MyContext.Provider>
            
    </div>
  )
}