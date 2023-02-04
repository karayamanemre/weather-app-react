import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className='weather'>
      {weather.main && (
        <div>
          <h3>{weather.name}</h3>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          <p>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</p>
          <p>Temperature: {props.unit === 'C' ? Math.round(weather.main.temp) : Math.round((weather.main.temp * 9) / 5 + 32)}°{props.unit}</p>
          <p>Minimum Temperature: {props.unit === 'C' ? Math.round(weather.main.temp_min) : Math.round((weather.main.temp_min * 9) / 5 + 32)}°{props.unit}</p>
          <p>Maximum Temperature: {props.unit === 'C' ? Math.round(weather.main.temp_max) : Math.round((weather.main.temp_max * 9) / 5 + 32)}°{props.unit}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;