import React, { Component } from "react";
import { auth } from "../../utils/firebase";
import { Redirect } from "react-router-dom";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
    toPortion: false
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submit = event => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.setState({ toPortion: true });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        {this.state.toPortion ? <Redirect to="/portion" /> : " "}
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <button className="submit" onClick={this.submit}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}
