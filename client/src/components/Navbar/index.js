import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <Link className="navbar-brand" to="/">
          Mindful Plate
      </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/form"
              className={
                window.location.pathname === "/form"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Form  |
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portion"
              className={
                window.location.pathname === "/portion" ||
                  window.location.pathname === "/portion"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portion  |  
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/grid"
              className={
                window.location.pathname === "/grid"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Plan Your Meals
          </Link>
          </li>
        </ul>
        <button
          className="signOut"
          onClick={() => {
            this.props.handleSignOut();
          }}
        >

          Sign Out

      </button>
      </nav>
    );
  }
}

export default Navbar;
