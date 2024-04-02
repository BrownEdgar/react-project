import React, { useState } from 'react'
import './App.scss'
import NavBar from './components/NavBar/NavBar'
import { About, Blog, Contact, ErrorPage, Home } from './pages'
import { Routes, Route } from 'react-router-dom'
import ROUTES from './routes'

export default function App() {
  const [data, setdata] = useState(['hello router'])
  return (
    <div className='App'>
      <NavBar />
      <div className="App__container">
        <Routes>
          <Route path={ROUTES.HOME} element={<Home title={data[0]} />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>


    </div>
  )
}
