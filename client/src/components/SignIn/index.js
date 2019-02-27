import React, { Component } from "react";
import { auth } from "../../utils/firebase";
import { Redirect } from "react-router-dom";
import "./style.css";
import Row from "../Row";
import Col from "../Col";

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
      <div className = "form">
        {this.state.toPortion ? <Redirect to="/portion" /> : " "}
        <form>
          <Row>
            <Col size ="md-12">
          <input
            className="input"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            type="email"
            placeholder="Email"
          />
            </Col>
            </Row>
          <Row>
            <Col size="md-12">

          <input
            className="input"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
            </Col>
          </Row>
          <button className="submit" onClick={this.submit}>
            Sign In
          </button>
        </form>
        <button className="btn-submit" onClick={this.submit}>
          Sign In
          </button>
      </div>
    );
  }
}

