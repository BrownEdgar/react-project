import React from 'react'
import Menu from "./Components/Menu/Menu"
import Home from "./Pages/Home/Home" 
import About from "./Pages/About/About"
import Blogs from "./Pages/Blogs/Blogs"
import { Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Menu/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}
