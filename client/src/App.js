import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    "testValue": "getting..."
  }

  componentDidMount() {
    console.log("Mounting APP");
    axios.get("/api/test")
      .then(result => {
        console.log(result.data.test);
        this.setState({ "testValue": result.data.test })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Power Quartet Mystery App</h2>
          <p>Get ready to be impressed!</p>
        </div>
        <p className="App-intro">
          Test value is: {this.state.testValue}
        </p>
      </div>
    );
  }
}

export default App;
