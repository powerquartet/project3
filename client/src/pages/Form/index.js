import React, { Component } from "react";
import API from "../../utils/API"
// import axios from "axios";
// import calculateBMICalories from '../../components/BMICalculator';
// import calculateBMI from '../../components/HealthyWeightCalc'
import Wrapper from '../../components/Wrapper/index';
import Container from '../../components/Container/index';
import Row from '../../components/Row/index';



class Form extends Component {
    // Setting the component's initial state

    state = {
        firstName: "",
        lastName: "",
        email: "",
        weight: 0,
        height: 0,
        age: 0,
        sex: '',
        userBMI: 0,
        userBMICalories: 0
    };



    handleInputChange = event => {
        console.log(event.target.name);
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleChange = (event) => {
        this.setState({ sex: event.target.value });
    };


    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log(this.state);

        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const weight = this.state.weight;
        const height = this.state.height;
        const age = this.state.age;
        const sex = this.state.gender;


        if (this.state.firstName && this.state.email) {
            API.saveUser({
                firstName,
                lastName,
                email,
                weight,
                height,
                age,
                sex
            })
                .then(res => {
                    console.log(JSON);
                    // this.loadUser();
                    // this.calculatePortionTier();
                }).catch(err => console.log(err));

            // userBMICalories = calculateBMI(height, age, gender);
            // calculateBMICalories(weight, height, age, sex);
        }

        // let firstName = this.state.firstName;
        // let lastName = this.state.lastName;

        // if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.weight || !this.state.height || !this.state.age) {
        //     alert("Please fill out all submission fields!");
        // } else {
        //     console.log(firstName, lastName);

        // }

    };

    render() {
        console.log("render method: ", this.state)
        return (
            <Wrapper>
                <Container>
                    <Row>

                        <div>
                            <h1>So, tell us about yourself</h1>
                            <p>
                                We're here to help you crush it,  {this.state.firstName}
                            </p>
                            <form className="form">
                                <p>
                                    <input
                                        value={this.state.firstName}
                                        name="firstName"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="First Name"
                                    />

                                </p>
                                <p>
                                    <input
                                        value={this.state.lastName}
                                        name="lastName"
                                        onChange={this.handleInputChange}
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </p>
                                <p>
                                    <input
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        type="email"
                                        placeholder="Email"
                                    />
                                </p>
                                <p>
                                    <input
                                        value={this.state.weight}
                                        name="weight"
                                        onChange={this.handleInputChange}
                                        type="weight"
                                        placeholder="Weight(lbs)"
                                    />
                                </p>
                                <p>
                                    <input
                                        value={this.state.height}
                                        name="height"
                                        onChange={this.handleInputChange}
                                        type="height"
                                        placeholder="Height(in)"
                                    />
                                </p>
                                <p>
                                    <input
                                        value={this.state.age}
                                        name="age"
                                        onChange={this.handleInputChange}
                                        type="aged"
                                        placeholder="age (years)"
                                    />
                                </p>
                                <p>
                                    <label>
                                        Pick your gender identity:
                                    </label>
                                </p>
                                <p>
                                    <select name='gender'
                                        value={this.state.gender}
                                        onChange={this.handleChange}>
                                        <option value="default">choose your sex</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        {/* <option value="non-sex-binary">Non-sex binary</option> */}
                                    </select>
                                </p>
                                <p>
                                    <button className="submit" onClick={this.handleFormSubmit}>Submit</button>
                                </p>
                            </form>

                        </div>

                    </Row>
                </Container>
            </Wrapper>
        );
    }
}

export default Form;