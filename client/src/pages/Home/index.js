import React, { Component } from "react";
import "../Home/css/style.css";
import logo from "../Home/css/img/plate.jpg";



class Home extends Component {
  render() {
    return (
      <div>
        
        <div className="Home-header">Welcome!</div>

        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="button-group">
          <a href="/form">
            <button className="Home-button button1" />
          </a>

          <a href="/portion">
            <button className="Home-button button2" />
          </a>

          <a href="/grid">
            <button className="Home-button button3" />
          </a>

        </div>
      </div>
    );
  }
}

export default Home;
