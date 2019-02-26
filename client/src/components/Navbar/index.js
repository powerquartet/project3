import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FaUtensils, FaAlignCenter } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import { FaVial } from "react-icons/fa";
import form from "./form.png";
import grid from "./grid.png";
import help from "./help.png";
import home from "./home.png";

const gridStyle = {
  size: "70",
  color: "white"
  
};
const formStyle = {
  size: "70",
  color: "white"
};
const portionStyle = {
  size: "70em",
  color: "white"
};
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      {/* <Link className="navbar-brand" to="/">
        1
      </Link> */}
      {/* <div> */}
      <ul className="navbar-nav">
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
            <FaUtensils className="faAlignCenter"  style={portionStyle} />
            {/* <img className="nav-icon" src={help} alt="help" /> */}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/form"
            className={
              window.location.pathname === "/form"
                ? "nav-link active"
                : "nav-link"
            }
          >
            <FaVial className="faAlignCenter"  style={formStyle} />
            {/* <img className="nav-icon" src={form} alt="form" /> */}
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
            <FaAppleAlt className = "faAlignCenter" style={gridStyle} />
            {/* <img className="nav-icon" src={grid} alt="grid" /> */}
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
