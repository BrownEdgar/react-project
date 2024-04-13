import React from 'react'
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Blogs from "./Pages/Blogs/Blogs"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
          <Route path="/about"  element ={<About/>}/>
          <Route path="/blogs"  element ={<Blogs/>}/>

      </Routes>
    </div>
  )
}
