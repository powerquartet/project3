import React, { Component } from "react";
import { auth } from "../../utils/firebase";
import { Redirect } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";

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
        <form className="form">
          <Row>
            <Col size="md-12">
              <input
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
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
            </Col>
          </Row>
          <button className="submit" onClick={this.submit}>
            Sign Up
          </button>
        </form>
        <button className="btn-submit" onClick={this.submit}>
          Sign Up
          </button>
      </div>
    );
  }
}

export default SignUp;
