import React, { createContext, useState } from 'react'
import A from './A'
import D from './D'
import { MyContext } from './contexts/Contexts'



export default function App() {

  const [data, setdata] = useState(669)

  return (
    <div>
      <h1>App Component</h1>
      <MyContext.Provider value={data}>
        <A />
      </MyContext.Provider>

      <D />



    </div>
  )
}
