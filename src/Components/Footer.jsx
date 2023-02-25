import React from 'react';

const Footer = (props) => {
  return (
    <header class="bg-gray-200 flex p-4 items-center justify-center rounded-full shadow-xl border-2 border-gray-300 mt-8">
      <p class="font-bold text-gray-800">Data provided by <a href="https://openweathermap.org/api" target="_blank" class="after:content-['_↗']">Open Weather Map API</a></p>
    </header>
  );
};

export default Footer;
