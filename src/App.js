import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by{" "}
          <a href="" target="_blank">
            Corina Serban
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/ecorina/my-react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/oncloud-app/overview"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
