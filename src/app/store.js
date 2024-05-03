import { configureStore, nanoid } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice';
import todosSlice from '../features/todos/todosSlice';
import UsersSlice from '../features/users/UsersSlice';
import mainMiddleware from '../middlevaries/Middlevare';



export const store = configureStore({
  reducer : {
    counter: counterSlice,
    todos : todosSlice,
    users:UsersSlice

  },
  middleware:mainMiddleware
})   






export default store;
