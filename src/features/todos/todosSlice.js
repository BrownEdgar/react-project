import { createSlice } from "@reduxjs/toolkit";

const todosSlice= createSlice({
    name:'todos',
    initialState:{
        data: [],
        status: "idle"
    },
    reducers:{
addTodos:(state,action)=>{
    state.data=action.payload
}
    },
    selectors:{
        getAllTodos:()=> (state) => state.data
    }
})
export default todosSlice.reducer
export const { addTodos } = todosSlice.actions
export const {getAllTodos} = todosSlice.selectors
