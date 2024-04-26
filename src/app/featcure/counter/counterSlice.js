import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name:"counter",
    initialState: 0,
    reducers:{
addnumber:(state,action)=>{
return state+1
}
    }
})
export default counterSlice.reducer
export  const {addnumber}= counterSlice.actions