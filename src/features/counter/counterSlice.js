import { createAction, createSlice } from "@reduxjs/toolkit";

export const multiplyCounter = createAction('counter/multiplyCounter')

const counterSlice = createSlice({
  name:'counter',
  initialState:1,
 
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
  },
  extraReducers:(bulider) =>{
   bulider.addCase(multiplyCounter,(state,action)=>{
      return state+1
   })
  }
})





export default counterSlice.reducer;
export const {addCounter} =counterSlice.actions
export const {foo} = counterSlice.actions
export const {fonction} = counterSlice.actions
export const{getCounter} = counterSlice.selectors



