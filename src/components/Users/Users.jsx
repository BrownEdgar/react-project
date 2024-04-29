import { getUser, saveUser } from '@f/users/usersSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector(getUser)
    const handleSubmit = (e)=>{
        e.preventDefault()
        const value = e.target.username.value
        dispatch(saveUser({username: value}))
    }
  return (
    <div className='Users'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='username' />
            <input type="submit" />
        </form>
        {
            users.map(elem => <li key={elem.id}>name : {elem.username}, id : {elem.id}</li>)
        }
    </div>
  )
}
