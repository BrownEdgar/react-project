import React from 'react'
import './Users.scss'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { saveUser } from '@f/users/usersSlice';
import { multiplyCounter } from '@f/counter/counterSlice';


export default function Users() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.username.value;
    dispatch(saveUser({ username: value }))
  }
  const handleClick = () => {
    dispatch(multiplyCounter())
  }
  return (
    <div className='Users'>
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' />
        <input type="submit" value="save" />
      </form>
      <button onClick={handleClick}>PLUS</button>
    </div>
  )
}
