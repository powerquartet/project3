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
      user: null,
      signUp: false
    }

    this.signOut = () => {
      auth.signOut().then((result) => {
        console.log(result);
      })
    }

    this.toggleSignUp = () => {
      this.setState({ signUp: !this.state.signUp })
    }
  }

  authListener() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  renderSignIn() {
    console.log(this.state.signUp);
    if (this.state.signUp === true) {
      return <SignUp />;
    } else {
      return <SignIn />
    }
  }

  componentDidMount() {
    this.authListener();
  }

  render() {

    return (

      <div className="container" >

        <div className="home-header">Welcome!</div>

        <div className="logo">
          <img className="logo" src={logo} alt="logo" />
        </div>

        {this.state.user === null ?
          <div>{this.renderSignIn()}</div>
          : ("Welcome @" + this.state.user.email.split("@")[0] + "!")}
        {this.state.signUp === false ?
          <div>
            If you don't have an account
              <button onClick={this.toggleSignUp}> Sign Up </button>
            !
            </div>
          :
          <div>
            Already have an acount?
            <button onClick={this.toggleSignUp}> Sign In </button>
          </div>
        }
        <div className="textArea"> A portion managing app that does the counting for you
          </div>
        <button style={{ "width": "65px" }} onClick={this.signOut} > Sign Out</button >
      </div >
    );
  }
}
export default Home;