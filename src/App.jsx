import React from 'react'
import './App.scss'
import NavBar from './components/Navbar/NavBar'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Contact from './pages/contactUs/Contact'
import { Routes,Route } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import Posts from  './pages/Posts/Posts'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ROUTES from './routes'



export default function App() {
  return (
    <div className='App'>
      <div className='App__container'>
      <NavBar/>
      <Routes> 
        <Route path={ROUTES.HOME} element={< Home />}/>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.CONTACT} element={<Contact />}/>
        <Route path={ROUTES.BLOG} element={<Blog />}/>
        <Route path={ROUTES.POSTS} element={<Posts/> }/>
        <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    </div>
    
    
    </div>
  )
}

   
    