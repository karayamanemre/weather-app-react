import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const Weather = (props) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=a888dec172e02a26c2a52a73ee2c577f&units=metric`
      );
      if (result.data.cod === 200) {
        setWeather(result.data);
      } else {
        setWeather({});
        alert('An error has occurred. Please try again later.');
      }
    };
    fetchData();
  }, [props.city]);

  return (
    <Card className='weather'>
      {weather.main && (
        <CardContent>
          <Typography variant="h5">{weather.name}</Typography>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          <Typography variant="subtitle1">{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</Typography>
          <Typography variant="body2">Temperature: {props.unit === 'C' ? Math.round(weather.main.temp) : Math.round((weather.main.temp * 9) / 5 + 32)}°{props.unit}</Typography>
          <Typography variant="body2">Minimum Temperature: {props.unit === 'C' ? Math.round(weather.main.temp_min) : Math.round((weather.main.temp_min * 9) / 5 + 32)}°{props.unit}</Typography>
          <Typography variant="body2">Maximum Temperature: {props.unit === 'C' ? Math.round(weather.main.temp_max) : Math.round((weather.main.temp_max * 9) / 5 + 32)}°{props.unit}</Typography>
          <Typography variant="body2">Humidity: {weather.main.humidity}%</Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default Weather;
