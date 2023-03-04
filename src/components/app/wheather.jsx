/** 2/17/27 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../features/weatherSlice';

function Weather() {
  const [city, setCity] = useState('Iztapalapa');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weather.loading && <div>Loading...</div>}
      {weather.data && (
        <div>
          <p>{weather.data.name}</p>
          <p>{weather.data.main.temp}°</p>
          {/* {console.log(weather.data)} */}
        </div>
        )
      }
      {weather.error && <div>{weather.error}</div>}
    </div>
  );
}

export default Weather;