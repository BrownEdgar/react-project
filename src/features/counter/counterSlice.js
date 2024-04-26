import { createSlice } from "@reduxjs/toolkit";

const counterSlice =createSlice({
    name: 'counter',
    initialState: 0,
    reducers:{
addcounter:(state, action)=>{
    return state+1
},
minusCount:(state, action)=>{
    return state-1
}
    },
    selectors:{
        getCounter: (state) => state
    }
})
export default counterSlice.reducer
export const {addcounter, minusCount} = counterSlice.actions
export const {getCounter} = counterSlice.selectors
