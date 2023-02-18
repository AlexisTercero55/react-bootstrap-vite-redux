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
        addByAmount: (state, action) => 
        {
            state.value += action.payload
        },
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
    addByAmount,} = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(addByAmount(amount))
    }, 1000)
}

export default counterSlice.reducer;