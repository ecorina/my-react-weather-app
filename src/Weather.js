import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Wednesday 14:53</li>
        <li>Mostrly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            alt="Senin"
            src="//ssl.gstatic.com/onebox/weather/64/sunny.png"
          />
          <span className="Temperature">6º|C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
