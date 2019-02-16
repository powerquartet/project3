import React from "react";
import "../Home/css/style.css";
import logo from "../Home/css/img/plate.png";
import { auth } from '../../utils/firebase';
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";

class Home extends React.Component {
  constructor(props) {

    super(props)

    this.state = {
      user: null
    }

    this.signOut = () => {
      auth.signOut().then((result) => {
        console.log(result);
      })
    }
  }

  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  componentDidMount() {
    this.authListener();
  }

  render() {

    { this.state.user ? console.log(this.state.user.uid) : "" }

    return (
      <div className="container" >
        {this.state.user === null ?
          (<SignIn />)
          : ("Welcome " + this.state.user.email)}

        {this.state.user === null ?
          (<SignUp />)
          : ("")}

        <button style={{ "width": "65px" }} onClick={this.signOut} > Sign Out</button >

        <div className="home-header">Welcome!</div>

        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="button-group">
          <a href="/form">
            <button className="button1">Form</button>
          </a>

          <a href="/portion">
            <button className="button2">Portion</button>
          </a>

          <a href="/grid">
            <button className="button3">Grid</button>
          </a>

        </div>

        <div className="textArea"> A portion managing app that does the counting for you
          </div>
      </div >
    );
  }
}

export default Home;