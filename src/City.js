import React from "react";
import moment from "moment/moment";

export default function City({weather, setCity, setWeather}) {

    const temp = Math.floor(weather.main.temp - 273.15);
    const cityName = weather.name;
    const country = weather.sys.country;
    const description = weather.weather[0].description;
    const wind = weather.wind.speed;
    const humidity = weather.main.humidity;
    const pressure = weather.main.pressure;
    const feelsLike = Math.floor(weather.main.feels_like - 273.15);
    const weatherIcon = weather.weather[0].icon;
    const id = weather.weather[0].id;
    const icon = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    const date = moment().format('MMM D, h:mm a');

    const handleNewSearch = () => {
        setCity('');
        setWeather('');
    }

    console.log(weather);

    return (
        <div className="city-container">
            <h3 className="city">{cityName}, {country}</h3>
            <img className="icon" src={icon} />
            <p className="temp">{temp}°C</p>
            <p className="description">{description}</p>
            <div className="weather-info">
                <p><span>Wind</span> {wind}</p>
                <p><span>Humidity</span> {humidity}%</p>
                <p><span>Pressure</span> {pressure}hPa</p>
                <p><span>Feels like</span> {feelsLike}°C</p>
            </div>
            <h4 className="date">{date}</h4>
            <button className="btn-new-search" onClick={handleNewSearch}>New Search</button>
        </div>
    );
}