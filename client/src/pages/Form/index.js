import React, { Component } from "react";

// import axios from "axios";

class Form extends Component {
    // Setting the component's initial state
    // componentDidMount() {
    //     axios.get("/api/noodles").then((response) => {
    //         return (response);
    //     });
    // }
    state = {
        firstName: "",
        lastName: "",
        email: "",
        weight: 0,
        height: 0,
        age: 0

    };
    handleInputChange = event => {
        console.log(event.target.name);
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "email") {
            value = value.substring(0, 50);
        }
        console.log(name, value)
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        // axios.post("/api/noodles", {
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     weight: this.state.weight,
        //     height: this.state.height,
        //     age: this.state.age
        // })
        //     .then((response) => console.log(response));

        let firstName = this.state.firstName;
        let lastName = this.state.lastName;

        if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.weight || !this.state.height || !this.state.age) {
            alert("Please fill out all submission fields!");
        } else {
            console.log(firstName, lastName);

        }

        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            weight: 0,
            height: 0,
            age: 0

        });
    };

    render() {
        return (
            <div>
                <h1>So, tell us about yourself</h1>
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
                        type="age"
                        placeholder="Age(yrs)"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
