import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Timer from "./components/timer/index.js";

const title = "Timer";

const App = () => {
  return (
    <div>
      <nav className="app-header layout-row align-items-center justify-content-center">
        <div className="layout-row align-items-center">
          <img alt="" src={logo} className="logo" />
          <h4 id="app-title" data-testid="app-title" className="app-title">
            {title}
          </h4>
        </div>
      </nav>
      <Timer />
    </div>
  );
};

export default App;
