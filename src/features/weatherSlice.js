/** 03/04/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

let initialState = { 
  data: null, 
  loading: false, 
  error: null 
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {//!To Doc

    getWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },

    getWeatherSuccess(state, action) {
      state.loading = false;
      state.data = {
          ...action.payload,
          main: {
          ...action.payload.main,
          temp: Math.round(action.payload.main.temp - 273.15), // convert Kelvin to Celsius
          },
      };
    },

    getWeatherFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },

  },
});

export const { //!To Doc
  getWeatherStart, 
  getWeatherSuccess, 
  getWeatherFailure 
} = weatherSlice.actions;

//!To Doc thunks (params) => async (dispatch) => {}
export const fetchWeather = (city) => async (dispatch) => {
  try 
  {
    dispatch(getWeatherStart());
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    dispatch(getWeatherSuccess(response.data));

  }catch (error) 
  {
    dispatch(getWeatherFailure(error.message));
  }
};

export default weatherSlice.reducer;
