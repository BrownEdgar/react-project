import React from 'react'
import DevCategories from './Home Worck/DevCategories/DevCategories'
import FData from './Home Worck/FData/FData'
import OurProducts from './Home Worck/OurProducts/OurProducts'
import Users from './Home Worck/Users/Users'
import Pagination from './Home Worck/Pagination/Pagination'
import AxiosTask from './Home Worck/Axios/AxiosTask'
import Server from './Home Worck/json-server/Server'
// menu
import {Home,Blog,About,ErrorPage} from './MainMenu/Pages/imports'
import NavBar from './MainMenu/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <>
      {/* <FData /> */}
      {/* <DevCategories /> */}
      {/* <Users/> */}
      {/* <OurProducts/> */}
      {/* <Pagination/> */}
      {/* <PaginateBlog/> */}
      {/* <AxiosTask/> */}
      {/* <Server/> */}

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<ErrorPage />} />

      </Routes>



    </>
  )
}
