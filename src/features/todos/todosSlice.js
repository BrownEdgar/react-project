import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getAsyncTodos = createAsyncThunk(
  'todos/getAsyncTodos',
  async () => {
    const response = await axios('https://jsonplaceholder.typicode.com/todos?_limit=6')
    return response.data
  }
)


const toodosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: 'idle'
  },
  reducers: {
    addTodos: (state, action) => {
      return {
        data: action.payload,
        status: 'success'
      }
    }
  },
  selectors: {
    getAllTodos: (state) => state.data
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getAsyncTodos.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addMatcher(
        (action) => action.type.endsWith('/multiplyCounter'),
        (state, action) => {
          console.log('addMatcher', action)
        }
      )
  }
})

export default toodosSlice.reducer;
export const { addTodos } = toodosSlice.actions
export const { getAllTodos } = toodosSlice.selectors