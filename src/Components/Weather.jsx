import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = (props) => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=558d62e1b6b1898f2f3de457dff41493&units=metric`
      );
      if (result.data.cod === 200) {
        setWeather(result.data);
      } else {
        setWeather({});
        alert('An error has occurred. Please try again later.');
      }
      setLoading(false);
    };
    fetchData();
  }, [props.city]);

  return (
    <main>
      {loading && 
        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
      </div>
      }
      <div className="weather">
        {weather.main && (
          <div>
            <h3>{weather.name}, {weather.sys.country}</h3>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p><b>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</b></p>
            <p>Temperature: {props.unit === 'C' ? Math.round(weather.main.temp) : Math.round((weather.main.temp * 9) / 5 + 32)}°{props.unit}</p>
            <p>Minimum Temperature: {props.unit === 'C' ? Math.round(weather.main.temp_min) : Math.round((weather.main.temp_min * 9) / 5 + 32)}°{props.unit}</p>
            <p>Maximum Temperature: {props.unit === 'C' ? Math.round(weather.main.temp_max) : Math.round((weather.main.temp_max * 9) / 5 + 32)}°{props.unit}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Weather;