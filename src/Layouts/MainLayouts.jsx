import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam earum modi quas corrupti. Quis provident in et a, quae aliquid asperiores laborum sequi tempora id perspiciatis consectetur dignissimos hic debitis inventore doloremque quisquam ad atque recusandae vero molestiae eius!</p>
      </footer>

    </>
  )
}
