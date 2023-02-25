import React from "react";
import { WiDayCloudy } from "react-icons/wi";

export default function Home({handleChange, getWeatherDate}) {
    return (
        <div className="container">
          <h1>Weather</h1>
          <WiDayCloudy className="clouds-app" />
          <h3 className="search-city">Search for a city</h3>
          <form>
            <input onChange={handleChange} className="search-input" type='text' placeholder="City" autoFocus required/>
            <button type="submit" className="btn" onClick={getWeatherDate}>Search</button>
          </form>
        </div>
    );
}