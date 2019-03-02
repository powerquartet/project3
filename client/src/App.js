import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Form from "./pages/Form";
import Grid from "./pages/Grid";
import Home from "./pages/Home";
import Portion from "./pages/Portion";
import Wrapper from "./components/Wrapper";
import { auth } from "./utils/firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      weight: 0,
      height: 0,
      age: 0,
      sex: "",
      activityLevel: "",
      user: null,
      userTier: "",
      signOut: false
    };
  };

  componentDidMount() {
    this.authListener();
    if (this.state.signOut === true) {
      this.setState({
        signOut: false
      });
    };
  };

  authListener() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ "user": user });
      };
    });
  };

  signOut = () => {
    auth.signOut().then(result => {
      this.setState({
        signOut: !this.state.signOut
      });
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSexChange = event => {
    this.setState({ sex: event.target.value });
  };

  handleALChange = event => {
    this.setState({ activityLevel: event.target.value });
  };

  getUserTier = (userTier) => {
    this.setState({ userTier });
  }

  render() {
    console.log("App.js, got user tier", this.state.userTier);
    console.log("User: ", this.state.user);
    return (
      <Router>
        <Wrapper>

          {this.state.signOut && auth.currentUser === null ? <Redirect to="/" /> : " "}
          {this.state.userTier !== "" ? <Redirect to="/portion" /> : " "}

          <Route
            exact
            path="/"
            render={() => (
              <Home
                user={this.state.user}
              />
            )}
          />

          <Route
            exact
            path="/form"
            render={() => (
              <Form
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                weight={this.state.weight}
                height={this.state.height}
                age={this.state.age}
                sex={this.state.sex}
                activityLevel={this.state.activityLevel}
                userTier={this.state.userTier}
                getUserTier={this.getUserTier}
                handleInputChange={this.handleInputChange}
                handleALChange={this.handleALChange}
                handleSexChange={this.handleSexChange}
                handleSignOut={this.signOut}
              />
            )}
          />

          <Route
            exact
            path="/portion"
            render={() => (
              <Portion
                firstName={this.state.firstName}
                userTier={this.state.userTier}
                handleSignOut={this.signOut}
              />
            )}
          />

          <Route
            exact
            path="/grid"
            render={() => (
              <Grid
                firstName={this.state.firstName}
                userTier={this.state.userTier}
                handleSignOut={this.signOut}
              />
            )}
          />

        </Wrapper>
      </Router>
    );
  }
}

export default App;