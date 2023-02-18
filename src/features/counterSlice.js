import { createSlice } from '@reduxjs/toolkit'

const initialStateValues = {
  value: 0,
}

/**
 * Basically createSlice accepts an object of 
 * reducer functions, a slice name
 * ( in our case slice name is ‘counter’) 
 * and an initialState
 * (here initialStateValues that contains coin) 
 * and automatically generates a slice reducer 
 * with corresponding action creators 
 * and action types.
 * 
 * Creating a slice requires a string name to 
 * identify the slice, 
 * an initial state value, 
 * and one or more reducer functions to define 
 * how the state can be updated. 
 */
export const counterSlice = createSlice(
{
    name: 'counter',
    initialState: initialStateValues,
    reducers: {
        increment: (state) => 
        {
            state.value += 1
        },
        decrement: (state) => 
        {
            state.value -= 1
        },
        incrementByAmount: (state, action) => 
        {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => 
        {
            state.value -= action.payload
        }
    },
});

/**
 * Once a slice is created, we can export 
 * the generated Redux action creators and 
 * the reducer function for the whole slice.
 */
export const { 
    increment, 
    decrement, 
    incrementByAmount, 
    decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;