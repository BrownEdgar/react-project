import { createSlice } from '@reduxjs/toolkit'


export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        saveUser:(state,action)=>{
            state.push(action.payload)
        }
    },
    selectors:{
        getUser:(state)=>state
    }
})

export default usersSlice.reducer
export const {saveUser}=usersSlice.actions
export const {getUser}=usersSlice.selectors
