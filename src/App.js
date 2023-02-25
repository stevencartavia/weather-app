import React, { useState } from "react";
import Home from "./Home";
import City from "./City";
import axios from "axios";

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();

  const handleChange = e => setCity(e.target.value);

  const getWeatherDate = async e => {
    e.preventDefault();
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b5d9a0998283df979f4cc7bccc269448`)
      .then(res => setWeather(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      {weather && city ? 
        <City weather={weather} setCity={setCity} setWeather={setWeather} /> : 
        <Home handleChange={handleChange} getWeatherDate={getWeatherDate} />
      }
    </div>
  );
}

export default App;