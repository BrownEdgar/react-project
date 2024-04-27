import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '@f/counter/counterSlice'
import todosSlice from '@f/todos/todosSlice'
import usersSlice from '@f/users/usersSlice'
import mainMiddleware from '../middlewaries/Minddleware'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
    users: usersSlice
  },
  middleware: mainMiddleware
})