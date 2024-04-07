import React from 'react'
import './App.css'
import DevCategories from './Home Worck/DevCategories/DevCategories'
import FData from './Home Worck/FData/FData'
import OurProducts from './Home Worck/OurProducts/OurProducts'
import Users from './Home Worck/Users/Users'
import Pagination from './Home Worck/Pagination/Pagination'
import AxiosTask from './Home Worck/Axios/AxiosTask'
import Server from './Home Worck/json-server/Server'
// menu
import {Home,Blog,Bloger,About,Posts,Post,ErrorPage} from './MainMenu/Pages/imports'
import { Routes, Route } from 'react-router-dom'
import MainLayouts from './MainMenu/NavBar/Layouts/MainLayouts'



export default function App() {
  return (
    <div className='App'>
      {/* <FData /> */}
      {/* <DevCategories /> */}
      {/* <Users/> */}
      {/* <OurProducts/> */}
      {/* <Pagination/> */}
      {/* <PaginateBlog/> */}
      {/* <AxiosTask/> */}
      {/* <Server/> */}

      <Routes>
        <Route path='/' element={<MainLayouts/>}>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<Bloger />} />

        <Route path='about' element={<About />} />
        <Route path='posts' element={<Posts />} />
        <Route path='posts/:id' element={<Post />} />
        <Route path='*' element={<ErrorPage />} />
        </Route>
        

      </Routes>



    </div>
  )
}
