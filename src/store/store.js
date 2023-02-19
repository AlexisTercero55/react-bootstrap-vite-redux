/** 2/17/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

//TODO: #5 Support for plain Redux form.


/**
 * configureStore({}) wraps createStore 
 * to provide simplified configuration options 
 * and good defaults. It can automatically combine 
 * your slice reducers, adds whatever 
 * Redux middleware you supply, 
 * includes redux-thunk by default, 
 * and enables use of the 
 * Redux DevTools Extension.
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
})