/** 03/04/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { 
    data: null, 
    loading: false, 
    error: null 
  },
  reducers: {
    getWeatherStart(state) {
      state.loading = true;
      state.error = null;
    },
    getWeatherSuccess(state, action) {
      state.loading = false;
    //   state.data = action.payload;
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
    //   state.data = null;
    },
  },
});

export const { getWeatherStart, getWeatherSuccess, getWeatherFailure } =
  weatherSlice.actions;

export const fetchWeather = (city) => async (dispatch) => {
  try 
  {
    dispatch(getWeatherStart());
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    dispatch(getWeatherSuccess(response.data));

  } catch (error) 
  {
    dispatch(getWeatherFailure(error.message));
  }
};

export default weatherSlice.reducer;
