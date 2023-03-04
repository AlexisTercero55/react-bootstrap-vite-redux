/** 2/17/27 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../features/weatherSlice';

import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import '../../css/weather.scss';
import { Github } from 'react-bootstrap-icons';

function Weather() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    dispatch(fetchWeather(city));
  };

  return (
    <div className="weather-container">
      {/* <p className="title1">uwu</p> */}
      <h1>Redux Toolkit Weather App</h1>
      <h4>
        <a href='https://github.com/AlexisTercero55'>
        <Github/>alexistercero55
        </a>
      </h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label >City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="text-center"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Get Weather
        </Button>
      </Form>

      {weather.loading && <Spinner animation="border" />}
      {weather.data && (
        <div className="weather-data">
          <p className="city-name">{weather.data.name}</p>
          <p className="temperature">{weather.data.main.temp}°C</p>
        </div>
      )}
      {weather.error && <Alert variant="danger">{weather.error}</Alert>}
    </div>
  );
}

export default Weather;