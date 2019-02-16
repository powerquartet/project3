import React, { Component } from "react";
import { auth } from '../../utils/firebase';

export default class SignIn extends Component {
    state = {
        email: "",
        passowrd: ""
    }

    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value })
    }

    submit = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => console.log(user))
            .catch((error) => console.log(error))
    };

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
                        value={this.state.passoword}
                        name="password"
                        onChange={this.handleChange}
                        type="password"
                        placeholder="Passowrd"
                    />
                    <button className="submit" onClick={this.submit}>Sign In</button>
                </form >
            </div >
        )
    }
}