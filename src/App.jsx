import React from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import { About, Blog, Contact, Error, Home, Posts } from './Pages'
import { Routes, Route} from 'react-router-dom'
import ROUTES from './routes'

export default function App() {
  return (
    <div className='App'>
     <div className='App__Container'>
     <NavBar/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.ABOUT} element={<About/>}/>
        <Route path={ROUTES.POSTS} element={<Posts/>}/>
        <Route path={ROUTES.CONTACT} element={<Contact/>}/>
        <Route path={ROUTES.BLOG} element={<Blog/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
      
     </div>
      
      
      
    </div>
  )
}
