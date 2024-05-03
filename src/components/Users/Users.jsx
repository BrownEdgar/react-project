import React from 'react'
import "./Users.scss"
import { useDispatch } from 'react-redux'
import { saveUser } from '../../features/users/UsersSlice'
import { multiplyCounter } from '../../features/counter/counterSlice'

export default function Users() {
  const dispatch = useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    const value = e.target.username.value
    dispatch(saveUser({username:value}))
  }
  const handleClick = ()=>{
    dispatch(multiplyCounter)
  }
  return (
    <div className='Users'>
     <form onSubmit={handleSubmit}>
      <input type="text" name='username' />
      <input type="submit" value='seve' />
     </form>
     <button onClick={handleClick}>Plus</button>
    </div>
  )
}
