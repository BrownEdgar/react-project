import { ADD_USER, DELETE_USER } from './actionTypes';

export const initialState = {
  data: ["Kirakos", "Kikos", "Nazar", "Ghazar"],
  status: null,
  action: ''
}

function reducer(state, action) {
  switch (action.type) {
    case ADD_USER: return addUser(state, action);
    case DELETE_USER: return deleteUser(state, action);
    default: return {
      ...state,
      status: 404,
      action: action.type,
      message: "action.type NOT FOUND"
    }
  }
}

const deleteUser = (state, { type, payload: name }) => {
  const x = state.data.filter(user => user !== name)
  return {
    data: x,
    status: 200,
    action: type
  }
}


const addUser = (state, action) => {
  if (state.data.includes(action.payload)) {
    return {
      ...state,
      status: 404,
      action: action.type,
      message: ""
    }
  }
  return {
    data: [...state.data, action.payload],
    status: 201,
    action: action.type
  }

}
export default reducer