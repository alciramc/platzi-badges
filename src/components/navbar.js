import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import "./styles/navbar.css";

export default class navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </nav>
    );
  }
}
