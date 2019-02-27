import React from "react";
import "./style.css";


const HeaderLogin = props => (
  <div className="header">
    <h1> Daily Plate </h1>
    <button className="btn-default" onClick={() => (props.handleDisplay())}>
      Get Started
        </button>
  </div>
);

export default HeaderLogin;