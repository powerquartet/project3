import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Form from "./pages/Form";
import Grid from "./pages/Grid";
import Home from "./pages/Home";
import Portion from "./pages/Portion";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Toggle from './components/Toggle';
// import Plans from './plans.json';
import { auth } from "./utils/firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      firstName: "",
      lastName: "",
      email: "",
      weight: 0,
      height: 0,
      age: 0,
      sex: "",
      userBMI: 0,
      userBMICalories: 0,
      userAL: ""
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  handleInputChange = event => {
    console.log(event.target.name);
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSexChange = event => {
    this.setState({ sex: event.target.value });
  };

  handleALChange = event => {
    this.setState({ userAL: event.target.value });
  };

  calculateBMI(weight, height) {
    let BMI;
    BMI =
      703 *
      (weight / Math.pow(height, 2));
    // console.log(`calculateBMI = ${BMI}`)
    return <span style={{ fontSize: BMI }}>{BMI}</span>;
  }

  calculateBMICalories(weight, height, age, sex, userAL) {
    let u_weight;
    let u_height;
    let u_age;
    let u_activity;
    let value;
    console.log(`BMICalc - reporting for duty.`);

    switch (sex) {
      // if the user has male inputs
      case "male":
        u_weight = 10 * (weight / 2.205);
        u_height = 6.25 * (height / 0.394);
        u_age = 5 * age;
        u_activity = parseInt(userAL);

        value = (u_weight + u_height - u_age + 5) * u_activity;

        console.log(`male BMICalc - ${value}`);
        break;

      // if the user has female inputs
      case "female":
        u_weight = 10 * (weight / 2.205);
        u_height = 6.25 * (height / 0.394);
        u_age = 5 * age;
        u_activity = parseInt(userAL);

        value = (u_weight + u_height - u_age - 161) * u_activity;

        console.log(`female BMICalc - ${value}`);
        console.log(weight, height, age);
        break;

      default:
        value = NaN;
    }
    return <span style={{ fontSize: value }}>{value}</span>;
  }

  // chooseUserTier(userBMICalories) {
  //   let userTier;
  //   console.log(`chooseUserTier function reporting for duty`);

  //   switch (userBMICalories) {

  //   }
  // }

  render() {
    console.log(auth.currentUser);
    return (
      <Router>
        <Wrapper>
          {/* <Header /> */}
          {/* <Route exact path="/" component={Home} /> */}
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
                email={this.state.email}
                weight={this.state.weight}
                height={this.state.height}
                age={this.state.age}
                sex={this.state.sex}
                userBMI={this.state.userBMI}
                userBMICalories={this.state.userBMICalories}
                userAL={this.state.userAL}
                handleInputChange={this.handleInputChange}
                handleALChange={this.handleALChange}
                handleSexChange={this.handleSexChange}
                calculateBMI={this.calculateBMI}
                calculateBMICalories={this.calculateBMICalories}
              />
            )}
          />

          {/* <Route exact path="/form" component={Form} /> */}

          <Route exact path="/portion" component={Portion} />
          <Route exact path="/grid" component={Grid} />
          <Navbar />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
