import { multiplyCounter } from '@f/counter/counterSlice';
import { createSlice } from '@reduxjs/toolkit';




const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    saveUser: (state, action) => {
      state.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(multiplyCounter, (state, action) => {
      state.push(Math.round(Math.random() * 1e5));
    })
  }
})

export default usersSlice.reducer;
export const { saveUser } = usersSlice.actions;