import usersSlice from '@f/users/usersSlice'
import { configureStore } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import counterSlice from '../features/counter/counterSlice'
import todosSlice from '../features/todos/todosSlice'

 const myFirstMiddlewar=(store)=>(next)=>(action)=>{
    console.log(new Date().toLocaleString());
    next(action)
} 
const checkUser = ({ getState }) => (next) => (action) => {
    if (action.type === "users/saveUser") {
      const users = getState().users;
      const x = users.find(user => user.username === action.payload.username);
      if (x) {
        console.log('user is alredy exist!')
        return;
      }
    }
    next(action)
  }
 const addId=(store)=>(next)=>(action)=>{
    action.payload.id = nanoid(5)
    next(action)
} 
export const store = configureStore({
    reducer:{
        counter:counterSlice,
        todos:todosSlice,
        users:usersSlice
    },
    middleware:()=>[myFirstMiddlewar,checkUser,addId]
})
