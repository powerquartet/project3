
import React, { Component } from "react";
import API from "../../utils/API"
// import axios from "axios";
// import calculateBMICalories from '../../components/BMICalorieCalculator';
// import calculateBMI from '../../components/BMICalculator'
import Wrapper from '../../components/Wrapper/index';
import Container from '../../components/Container/index';
import Row from '../../components/Row/index';
// import calculateBMI from '../../components/BMICalculator/index';


// function BMI() {
//     return <calculateBMI />;
// }

// function BMICal() {
//     return <calculateBMICalories />
// }


class Form extends Component {
    // Setting the component's initial props
    constructor(props) {
        super(props)
        console.log(`constructor here`)
    }
    // props = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     weight: 0,
    //     height: 0,
    //     age: 0,
    //     sex: '',
    //     userBMI: 0,
    //     // userBMICalories: 0,
    //     //AL = Activity Level
    //     userAL: ''
    // };



    // handleInputChange = event => {
    //     console.log(event.target.name);
    //     // Getting the value and name of the input which triggered the change
    //     let value = event.target.value;
    //     const name = event.target.name;

    //     this.setprops({
    //         [name]: value
    //     });
    // };



    // handleSexChange = (event) => {
    //     this.setprops({ sex: event.target.value });
    // };

    // handleALChange = (event) => {
    //     this.setprops({ userAL: event.target.value });
    // };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log(this.props);

        const firstName = this.props.firstName;
        const lastName = this.props.lastName;
        const email = this.props.email;
        const weight = this.props.weight;
        const height = this.props.height;
        const age = this.props.age;
        const sex = this.props.sex;
        const userBMI = this.props.userBMI;
        const userBMICalories = this.props.userBMICalories;
        const userAL = this.props.userAL;


        if (this.props.firstName && this.props.email) {
            API.saveUser({
                firstName,
                lastName,
                email,
                weight,
                height,
                age,
                sex,
                userBMI,
                userBMICalories,
                userAL
            })
                .then(res => {
                    console.log(JSON);
                    // this.loadUser();
                    this.props.calculateBMI(weight, height);
                    this.props.calculateBMICalories(weight, height, age, sex, userAL);
                    console.log(userBMI, userBMICalories);
                }).catch(err => console.log(err));

        }


        // let firstName = this.props.firstName;
        // let lastName = this.props.lastName;

        // if (!this.props.firstName || !this.props.lastName || !this.props.email || !this.props.weight || !this.props.height || !this.props.age) {
        //     alert("Please fill out all submission fields!");
        // } else {
        //     console.log(firstName, lastName);

        // }


    };

    render() {
        console.log("render method: ", this.props)
        return (
            <Wrapper>
                <Container>
                    <Row>

                        <div>

                            <h1>So, tell us about yourself</h1>
                            <p>
                                We're here to help you crush it,  {this.props.firstName}
                            </p>
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
                                        value={this.props.email}
                                        name="email"
                                        onChange={this.props.handleInputChange}
                                        type="email"
                                        placeholder="Email"
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
                                    <label>
                                        Sex:
                                    </label>
                                </p>
                                <p>
                                    <select name='sex'
                                        value={this.props.sex}
                                        onChange={this.props.handleSexChange}>
                                        <option value="default">choose your sex</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        {/* <option value="non-sex-binary">Non-sex binary</option> */}
                                    </select>
                                </p>
                                <p>
                                    <label>
                                        Activity Level:
                                    </label>
                                </p>
                                <p>
                                    <select name='userAL'
                                        value={this.props.userAL}
                                        onChange={this.props.handleALChange}>
                                        <option value="default">choose your activity level</option>
                                        <option value='1.53' >Less than 30 minutes of exercise each day</option>
                                        <option value='1.76'>30-60 minutes of exercise each day</option>
                                        <option value='2.25'>More than 60 minutes each day</option>
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