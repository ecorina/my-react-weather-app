import React from "react";
import { isNonNullChain } from "typescript";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <input className="form-control" type="text" placeholder="City..." />
        Weather App
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
