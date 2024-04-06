import React, { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { ADD_USER, DELETE_USER } from './actionTypes'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>
        {JSON.stringify(state)}
      </h1>

      <button onClick={() => dispatch({ type: ADD_USER, payload: "Ashot" })}>add user</button>
      <button onClick={() => dispatch({ type: 'sa', payload: "Nazar" })}>delete user</button>

    </div>
  )
}
