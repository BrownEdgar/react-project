import { nanoid } from 'nanoid'

const myFirstMiddleware = (store) => (next) => (action) => {
  console.log(new Date().toLocaleTimeString(), action)
  next(action)
}

const chekcUser = ({ getState }) => (next) => (action) => {
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

const addId = (store) => (next) => (action) => {
  if (action.type === "users/saveUser") {
    action.payload.id = nanoid(6)
  }
  next(action)

}

const mainMiddleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(myFirstMiddleware, chekcUser, addId);

export default mainMiddleware;
