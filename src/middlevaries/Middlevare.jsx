import { nanoid } from "@reduxjs/toolkit"


const myFirstMiddleware = (store) => (next) =>(action) =>{
  console.log(new Date().toLocaleTimeString(),action)
  next(action)
}
const ChekcUser= ({getState}) => (next) =>(action) =>{
   if(action.type==="users/saveUser"){
   const users = getState().users
   const x = users.find(user => user.username === action.payload.username);
   if(x){
    console.log('user is exist');
    return
   }
   }
   next(action)
}
const addId = (store) => (next) =>(action) =>{
   if(action.type==="users/saveUser"){
    action.payload.id = nanoid(6)
   }
   next(action)
}

const mainMiddleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(myFirstMiddleware,ChekcUser,addId);
export default mainMiddleware

