import { createSlice } from "@reduxjs/toolkit";

const toodosSlice = createSlice({
  name:'todos',
  initialState:{
    data:[],
    status:'idle'
  },
  reducers:{
    addTodos:(state,action)=>{
     return {
      data:action.payload,
      status: 'successs'
     }
    }
  },

  selectors:{
    getAllTodos:(state)=>state.data
  }
})

export default toodosSlice.reducer;
export const {addTodos} = toodosSlice.actions
export const {getAllTodos}= toodosSlice.selectors
