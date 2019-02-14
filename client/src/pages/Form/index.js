import React, { Component } from "react";
import API from "../../utils/API"
// import axios from "axios";

class Form extends Component {
    // Setting the component's initial state

    state = {
        firstName: "",
        lastName: "",
        email: "",
        weight: 0,
        height: 0,
        age: 0,
        gender: ''

    };

    // calculatePortionTier = event => {

    //     maleTier = (10 * this.state.weight + 6.25 * this.state.height - 5 * this.state.age + 5)

    // }


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
        this.setState({ gender: event.target.value });
    }

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log(this.state);
        if (this.state.firstName && this.state.email) {
            API.saveUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                weight: this.state.weight,
                height: this.state.height,
                age: this.state.age,
                gender: this.state.gender
            })
                .then(res => {
                    // this.loadUser();
                    // this.calculatePortionTier();
                })
                .catch(err => console.log(err));

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
            <div>
                <h1>Welcome to Portion Crush</h1>
                <p>
                    We're here to help you crush it,  {this.state.firstName} {this.state.lastName}
                </p>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.weight}
                        name="weight"
                        onChange={this.handleInputChange}
                        type="weight"
                        placeholder="Weight(lbs)"
                    />
                    <input
                        value={this.state.height}
                        name="height"
                        onChange={this.handleInputChange}
                        type="height"
                        placeholder="Height(in)"
                    />
                    <input
                        value={this.state.age}
                        name="age"
                        onChange={this.handleInputChange}
                        type="aged"
                        placeholder="age (years)"
                    />
                    <label>
                        Pick your gender identity:
          <select name='gender' value={this.state.gender} onChange={this.handleChange}>
                            <option value="default">choose your gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="non-gender-binary">Non-gender binary</option>
                        </select>
                    </label>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;