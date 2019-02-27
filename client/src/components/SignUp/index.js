import React, { Component } from "react";
import { auth } from "../../utils/firebase";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submit = event => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        // make call to the server sending in that unique id from firebase
        this.setState({
          toForm: true
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        {this.state.toForm ? <Redirect to="/form" /> : " "}
        <form>
          <input
            className="input"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
          />
          <input
            className="input"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
        </form>
        <button className="btn-submit" onClick={this.submit}>
          Sign Up
          </button>
      </div>
    );
  }
}

export default SignUp;
