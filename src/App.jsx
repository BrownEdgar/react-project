import React, { useState } from 'react'
import './App.scss'

import { About, Blog, Bloger, Contact, ErrorPage, Home, Post, Posts } from './pages'
import { Routes, Route } from 'react-router-dom'
import MainLayouts from './Layouts/MainLayouts'

export default function App() {
  const [data, setdata] = useState(['hello router']);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainLayouts />}>
          <Route index element={<Home title={data[0]} />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<Bloger />} />
          <Route path='posts' element={<Posts />} />
          <Route path='posts/:id' element={<Post />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>

  )
}
