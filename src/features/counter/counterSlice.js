import { createAction, createSlice } from '@reduxjs/toolkit'


export const multiplyCounter = createAction('counter/multiplyCounter')

const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    addCounter(state) {
      return state + 1;
    }
  },
  selectors: {
    getCounter: (state) => state
  },
  extraReducers: (builder) => {
    builder.addCase(multiplyCounter, (state, action) => {
      return state + 1;
    })
  }
})

export default counterSlice.reducer;
export const { addCounter } = counterSlice.actions;
export const { getCounter } = counterSlice.selectors;