import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter City..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = `6905ff0b38fa30ab82c89c7372272fbd`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaulCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div className="lds-hourglass"></div>;
  }
}
