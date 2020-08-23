import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";

import App from "./components/app";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);
ReactDOM.render(<App />, container);
