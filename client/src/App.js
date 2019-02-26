import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Form from "./pages/Form";
import Grid from "./pages/Grid";
import Home from "./pages/Home";
import Portion from "./pages/Portion";
import Wrapper from "./components/Wrapper";
// import plans from './plans.json';
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
      userPlan: {},
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
        this.setState({ user });
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

  render() {
    return (
      <Router>
        <Wrapper>

          {this.state.signOut && auth.currentUser === null ? <Redirect to="/" /> : " "}

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
                userPlan={this.state.userPlan}
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
                handleInputChange={this.handleInputChange}
                calculateTier={this.calculateTier}
              />
            )}
          />

          <Route exact path="/grid" component={Grid} />

        </Wrapper>
      </Router>
    );
  }
}

export default App;