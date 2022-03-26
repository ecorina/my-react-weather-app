import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaulCity="London" />

        <footer>
          This project was coded by Corina S and is {""}
          <a
            href="https://github.com/ecorina/my-react-weather"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
