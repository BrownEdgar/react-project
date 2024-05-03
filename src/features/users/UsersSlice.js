import { createSlice } from "@reduxjs/toolkit";
import { multiplyCounter } from "../counter/counterSlice";

const usersSlice =createSlice({
  name: 'users',
  initialState:[],
  reducers : {
    saveUser:(state,action)=>{
      state.push(action.payload)
    },
  },
  extraReducers:(bulider) =>{
    bulider.addCase(multiplyCounter,(state,action)=>{
       state.push(Math.round(Math.random()*1e7))
    })
   }
})

export default usersSlice.reducer;
export const {saveUser} = usersSlice.actions;