// Импорты вынесены в начало файла
import React from 'react'
import { useDispatch } from 'react-redux'
import { saveUser } from '../../features/users/usersSlice'

const hendleSubmit = (dispatch, e) => {
  e.preventDefault()
  const value = e.target.username.value
  dispatch(saveUser({ username: value }))
}

export default function Users() {
  const dispatch = useDispatch()

  return (
    <div className='Users'>
      <form onSubmit={(e) => hendleSubmit(dispatch, e)}>
        <input type="text" name='username' />
        <input type="submit" value='save' />
      </form>
    </div>
  )
}

