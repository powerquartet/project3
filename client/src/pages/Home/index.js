import React from "react";
import "../Home/css/style.css";
import logo from "../Home/css/img/plate.png";


class Home extends React.Component {
  render() {
    return (
      <div className ="container">
        <div className="home-header">Welcome!</div>

        <div className="logo">
          <img className="logo" src={logo} alt="logo"/>
        </div>

        <div className="button-group">
          <a href="/form">
            <button className="button1">Form</button>
          </a>

          <a href="/portion">
            <button className="button2">Portion</button>
          </a>

          <a href="/grid">
            <button className="button3">Grid</button>
          </a>
        </div>

      </div>
    );
  }
}

export default Home;
