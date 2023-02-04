import React, { useState } from 'react';
import Header from './Components/Header'
import Weather from './Components/Weather'

function App() {
  const [city, setCity] = useState('London');
  const [unit, setUnit] = useState('C');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.elements.city.value);
  };

  const handleToggle = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div>
      <Header handleSubmit={handleSubmit} handleToggle={handleToggle} />
      <Weather city={city} unit={unit} />
    </div>
  );
}

export default App;
