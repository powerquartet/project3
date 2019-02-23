import React from "react";
import "../../components/Header/style.css";
import { Link } from "react-router-dom";

const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="navbar-brand" to="/">
          Daily Plate{" "}
        </Link>{" "}
        {/* <div> */}{" "}
      </li>{" "}
      <li className="nav-item">
        <Link
          to="/SignIn"
          className={
            window.location.pathname === "/SignIn" ||
            window.location.pathname === "/SignIn"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Sign In{" "}
        </Link>{" "}
      </li>{" "}
      <li className="nav-item">
        <Link
          to="/SignUp"
          className={
            window.location.pathname === "/SignUp"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Sign Up{" "}
        </Link>{" "}
      </li>{" "}
    </ul>{" "}
    {/* </div> */}{" "}
  </nav>
);

export default Header;
