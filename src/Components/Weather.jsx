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
    <main class="container w-full bg-gray-300 flex flex-col items-center justify-center p-6 rounded-xl mt-8 shadow-xl border-2 border-gray-200">
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
      <div class="w-full flex items-center justify-center p-6">
        {weather.main && (
          <div class="card flex flex-col items-center justify-center w-full">
            <h2 class="text-2xl font-bold">{weather.name}, {weather.sys.country}</h2>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                class="w-24 h-24 mx-auto"
            />
            <h3 class="text-xl font-bold mb-2">{weather.weather[0].main}</h3>
            <h3 class="text-lg">{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</h3>
            <div>
              <p class="text-gray-800">Temperature: {props.unit === 'C' ? Math.round(weather.main.temp) : Math.round((weather.main.temp * 9) / 5 + 32)}°{props.unit}</p>
              <p class="text-gray-800">Min: {props.unit === 'C' ? Math.round(weather.main.temp_min) : Math.round((weather.main.temp_min * 9) / 5 + 32)}°{props.unit}</p>
              <p class="text-gray-800">Max: {props.unit === 'C' ? Math.round(weather.main.temp_max) : Math.round((weather.main.temp_max * 9) / 5 + 32)}°{props.unit}</p>
              <p class="text-gray-800">Humidity: {weather.main.humidity}%</p>
              <p class="text-gray-800">Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
              <p class="text-gray-800">Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Weather;