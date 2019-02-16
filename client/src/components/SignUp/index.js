import React, { Component } from "react";
import { auth } from '../../utils/firebase';

class SignUp extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value })
    }

    submit = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => { })
            .catch((error) => console.log(error))
    }

    render() {

        return (
            <div style={{ "width": "150px", "heigt": "200px", "margin": "5px" }}>
                <form className="form">
                    < input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        value={this.state.password}
                        name="password"
                        onChange={this.handleChange}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="submit" onClick={this.submit}>Sign Up</button>
                </form >
            </div >
        )
    }
}

export default SignUp;