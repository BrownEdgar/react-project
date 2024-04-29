import { nanoid } from 'nanoid'
 

const firstMIddleware = (store)=>(next)=>(action)=>{
console.log(new Date().toLocaleTimeString(), action)
next(action)
}
const checkUser= (store)=>(next)=>(action)=>{
  if(action.type ==="users/saveUser"){
    const users = store.getState().users;
    const name =users.find(user=> user.username===action.payload.username);
    if(name){
      console.log("there is such a user")
      return;
    }

  }
  next(action)
  }
  const addId= (store)=>(next)=>(action)=>{
    if(action.type ==="users/saveUser"){
      action.payload.id = nanoid(5)
    }
    next(action)
    }
    const mainMiddleware =()=>[firstMIddleware,checkUser, addId]
    export default mainMiddleware;