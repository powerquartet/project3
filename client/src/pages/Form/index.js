import React, { Component } from "react";

class Form extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        email: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "email") {
            value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Fill out your first and last name please!");
        } else if (this.state.email.length < 6) {
            alert(
                `Choose a more secure password ${this.state.firstName} ${this.state
                    .lastName}`
            );
        } else {
            alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
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
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p>
                    Hello {this.state.firstName} {this.state.lastName}
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
                        value={this.state.email}
                        name="weight"
                        onChange={this.handleInputChange}
                        type="weight"
                        placeholder="Weight"
                    />
                    <input
                        value={this.state.email}
                        name="height"
                        onChange={this.handleInputChange}
                        type="height"
                        placeholder="Height"
                    />
                    <input
                        value={this.state.email}
                        name="age"
                        onChange={this.handleInputChange}
                        type="age"
                        placeholder="Age"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
