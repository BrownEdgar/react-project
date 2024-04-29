import { createSlice } from "@reduxjs/toolkit";

const usersslice =createSlice({
    name: "users",
    initialState: [],
    reducers: {
        saveUser:(state, action)=>{
            state.push(action.payload)
        }
    }

})
export default usersslice.reducer
export const { saveUser } = usersslice.actions