import React, { Component } from "react";
import API from "../../utils/API";
// import axios from "axios";
import Wrapper from "../../components/Wrapper/index";
import Container from "../../components/Container/index";
import Row from "../../components/Row/index";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { auth } from "../../utils/firebase";

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userTiers: [],
      chosenTier: ""
    };
  }

  componentDidMount = () => {
    console.log(this.state.userTiers);
  }

  handleFormSubmit = event => {

    event.preventDefault();

    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const weight = this.props.weight;
    const height = this.props.height;
    const age = this.props.age;
    const sex = this.props.sex;
    const activityLevel = this.props.activityLevel;

    if (this.props.firstName) {
      API.saveUser({
        _id: auth.currentUser.uid,
        firstName,
        lastName,
        email: auth.currentUser.email,
        weight,
        height,
        age,
        sex,
        activityLevel
      })
        .then(res => {

          let userTiersArray = this.getUserTiers(res.data.weight, res.data.height, res.data.age, res.data.sex, res.data.activityLevel);

          this.setState({
            "userTiers": userTiersArray
          });

        })
        .catch(err => console.log(err));
    }

    // let firstName = this.props.firstName;
    // let lastName = this.props.lastName;

    // if (!this.props.firstName || !this.props.lastName || !this.props.email || !this.props.weight || !this.props.height || !this.props.age) {
    //     alert("Please fill out all submission fields!");
    // } else {
    //     console.log(firstName, lastName);
    // }
  };

  handleFormUpdate = event => {

    event.preventDefault();

    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const weight = this.props.weight;
    const height = this.props.height;
    const age = this.props.age;
    const sex = this.props.sex;
    const activityLevel = this.props.activityLevel;

    if (auth.currentUser.uid) {
      API.updateUser({
        // _id: auth.currentUser.uid,
        firstName,
        lastName,
        // email: auth.currentUser.email,
        weight,
        height,
        age,
        sex,
        activityLevel
      })
        .then(res => {
          console.log(`I'm res`, res);
          let userTiersArray = this.getUserTiers(res.data.weight, res.data.height, res.data.age, res.data.sex, res.data.activityLevel);

          this.setState({
            "userTiers": userTiersArray
          });

        })
        .catch(err => console.log(err));
    }

    // let firstName = this.props.firstName;
    // let lastName = this.props.lastName;

    // if (!this.props.firstName || !this.props.lastName || !this.props.email || !this.props.weight || !this.props.height || !this.props.age) {
    //     alert("Please fill out all submission fields!");
    // } else {
    //     console.log(firstName, lastName);
    // }
  };


  handleClick = (tier) => {
    console.log(tier);
    //grab the vaule from user's choice
    // send props back to App.js
    this.props.getUserTier(tier);
  }

  // Calculate food plan based on TEE & BMI

  // Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
  // Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

  // Sedentary or light activity	(Office worker getting little or no exercise)	1.53
  // Active or moderately active	(Construction worker or person running one hour daily)	1.76
  // Vigorously active	(Agricultural worker (non mechanized) or person swimming two hours daily)	2.25

  getUserTiers = (weight, height, age, sex, activityLevel) => {
    const BMI = this.calculateBMI(weight, height);
    const idealWeight = this.caluclateIdealWeight(height);
    const userTEE = this.calculateBMICalories(weight, height, age, sex, activityLevel);
    const idealTEE = this.calculateBMICalories(idealWeight, height, age, sex, activityLevel);
    let userTiers = [];

    // if a person has a healthy BMI
    if (BMI >= 18.5 && BMI <= 25) {
      // calculate their suggestions base on their OWN weight
      const tier = this.calculateTier(userTEE);
      userTiers.push(tier);

      // if a person is underweight
    } else if (BMI < 18.5) {
      // calculate their suggestions beased on their IDEAL weight
      const tier = this.calculateTier(idealTEE);
      userTiers.push(tier);

      // if a person is obesese
    } else if (BMI >= 30) {
      // calculate thir suggestions bease on their IDEAL weight
      const tier = this.calculateTier(idealTEE);
      userTiers.push(tier);

      //if a person is overweight (muscle mass or genetic features come in play)
    } else if (BMI > 25 && BMI < 30) {
      // SHOW TWO SUGGESTIONS
      // calucate based on thier OWN weight & their IDEAL weight
      const tier1 = this.calculateTier(idealTEE);
      const tier2 = this.calculateTier(userTEE);

      userTiers.push(tier1, tier2);
    }

    return userTiers;

  }


  calculateBMICalories = (weight, height, age, sex, activityLevel) => {

    let weightKG = weight / 2.205;
    let heightCM = height * 2.54;
    //total energy expenditure
    let tee;

    switch (sex) {
      // if the user has male inputs
      case "male":
        tee = ((10 * weightKG) + (6.25 * heightCM) - (5 * age) + 5) * activityLevel;
        break;
      // if the user has female inputs
      case "female":
        tee = ((10 * weightKG) + (6.25 * heightCM) - (5 * age) - 161) * activityLevel;
        break;

      default:
        tee = NaN;
        console.log(tee);
    }

    return tee;
  }

  // BMI range formula
  calculateBMI = (weight, height) => {

    let BMI = 703 * (weight / Math.pow(height, 2));

    return BMI;
  }

  // Lemmens formula: most reliable -> shows very low weight, corresponds with BMI
  // Ideal Body Weight (kg) = 22 x height^2 (meter)
  // transform to imperial = 2.205 (IBW)
  // tansform inches to meters inches/39.37
  caluclateIdealWeight = (height) => {

    let heightInMeters = height / 39.37;
    let idealBodyWeightKG = 22 * (Math.pow(heightInMeters, 2));
    let idealBodyWeightPounds = 2.205 * idealBodyWeightKG;

    return idealBodyWeightPounds;
  }

  calculateTier = (totalEnergyExpenditure) => {

    let userTier;

    const caloricRemainder = totalEnergyExpenditure % 100;
    // Drop 2 zeros
    const checkTier = (totalEnergyExpenditure - caloricRemainder) / 100;
    // Check if a number is odd
    const isOdd = checkTier % 2;
    //if isOdd = 0 then false -> go lower
    // if is Odd = 1, then true -> go higher
    if (isOdd === 1) {
      userTier = (checkTier + isOdd) * 100;
    } else {
      userTier = checkTier * 100
    }

    return userTier;
  }

  render() {

    const userTier = this.state.userTiers.map(tier => <button key={tier} onClick={() => this.handleClick(tier)}>{tier}</button>);

    return (
      <Wrapper>
        <Header
          handleSignOut={this.props.handleSignOut}
        />
        <Container>
          {this.state.userTiers.length > 0 ?
            <div>
              {userTier}
            </div>
            :
            <Row>
              <div>
                <h1>So, tell us about yourself</h1>
                <p>We're here to help you crush it, {this.props.firstName}</p>
                <form className="form">
                  <p>
                    <input
                      value={this.props.firstName}
                      name="firstName"
                      onChange={this.props.handleInputChange}
                      type="text"
                      placeholder="First Name"
                    />
                  </p>
                  <p>
                    <input
                      value={this.props.lastName}
                      name="lastName"
                      onChange={this.props.handleInputChange}
                      type="text"
                      placeholder="Last Name"
                    />
                  </p>
                  <p>
                    <input
                      value={this.props.weight}
                      name="weight"
                      onChange={this.props.handleInputChange}
                      type="weight"
                      placeholder="Weight(lbs)"
                    />
                  </p>
                  <p>
                    <input
                      value={this.props.height}
                      name="height"
                      onChange={this.props.handleInputChange}
                      type="height"
                      placeholder="Height(in)"
                    />
                  </p>
                  <p>
                    <input
                      value={this.props.age}
                      name="age"
                      onChange={this.props.handleInputChange}
                      type="aged"
                      placeholder="age (years)"
                    />
                  </p>
                  <p>
                    <label>Sex:</label>
                  </p>
                  <p>
                    <select
                      name="sex"
                      value={this.props.sex}
                      onChange={this.props.handleSexChange}
                    >
                      <option value="default">choose your sex</option>
                      <option value="male">male</option>
                      <option value="female">female</option>
                      {/* <option value="non-sex-binary">Non-sex binary</option> */}
                    </select>
                  </p>
                  <p>
                    <label>Activity Level:</label>
                  </p>
                  <p>
                    <select
                      name="userAL"
                      value={this.props.activityLevel}
                      onChange={this.props.handleALChange}
                    >
                      <option value="default">choose your activity level</option>
                      <option value="1.53">
                        Less than 30 minutes of exercise each day
                    </option>
                      <option value="1.76">
                        30-60 minutes of exercise each day
                    </option>
                      <option value="2.25">More than 60 minutes each day</option>
                    </select>
                  </p>
                  <p>
                    {auth.currentUser ? (
                      <button className="submit" onClick={this.handleFormSubmit}>
                        Submit
                  </button>
                    ) : (
                        <button className="update" onClick={this.handleFormUpdate}>
                          Update
                  </button>
                      )}
                  </p>
                </form>
              </div>
            </Row>
          }
        </Container>
        <Navbar />
      </Wrapper>
    );
  }
}

export default Form;
