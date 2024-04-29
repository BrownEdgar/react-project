import {
  configureStore
} from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import todosSlice from '../features/todos/todosSlice'
import usersSlice from '../features/users/usersSlice'
import {
  nanoid
} from 'nanoid'
import mainMiddleware from '../middlewaries/Middleware'


const firstMIddleware = (store) => (next) => (action) => {
  console.log(new Date().toLocaleTimeString(), action)
  next(action)
}
const checkUser = (store) => (next) => (action) => {
  if (action.type === "users/saveUser") {
    const users = store.getState().users;
    const name = users.find(user => user.username === action.payload.username);
    if (name) {
      console.log("there is such a user")
      return;
    }

  }
  next(action)
}
const addId = (store) => (next) => (action) => {
  if (action.type === "users/saveUser") {
    action.payload.id = nanoid(5)
  }
  next(action)
}
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
    users: usersSlice
  },
  middleware: mainMiddleware
})