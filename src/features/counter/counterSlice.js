import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:'counter',
  initialState:0,
 
  reducers:{
    addCounter:(state,action)=>{
       return state+1
    },
    foo:(state)=>{
       return state -1
    },
    fonction:(state)=>{
       return Math.round(Math.random()*(state-state))
    },
   
  },

  selectors:{
   getCounter:(state)=>state 
  }
})





export default counterSlice.reducer;
export const {addCounter} =counterSlice.actions
export const {foo} = counterSlice.actions
export const {fonction} = counterSlice.actions
export const{getCounter} = counterSlice.selectors



