import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const apiKey = `6905ff0b38fa30ab82c89c7372272fbd`;
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
      <h1>London</h1>
      <ul>
        <li>Wednesday 14:53</li>
        <li>Mostrly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Senin"
              className="float-left"
            />
            <span className="floate-left">
              <span className="temp">6</span> <span className="unit">ºC</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="details">
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
