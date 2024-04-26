import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state + 1
        },
        decrement: (state) => {
            return state - 1
        }
    },
    selectors:{
        getCounter:(state)=>state
    }
})

export const { increment,decrement } = counterSlice.actions
export const { getCounter } = counterSlice.selectors
export default counterSlice.reducer
