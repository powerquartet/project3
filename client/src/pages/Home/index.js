import React from "react";
import "../Home/css/style.css";
import logo from "../Home/css/img/food.jpg";
import { auth } from "../../utils/firebase";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
// import Navbar from "../../components/Navbar";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      signUp: false
    };

    this.signOut = () => {
      auth.signOut().then(result => {
        console.log(result);
      });
    };

    this.toggleSignUp = () => {
      this.setState({ signUp: !this.state.signUp });
    };
  }

  authListener() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  renderSignIn() {
    console.log(this.state.signUp);
    if (this.state.signUp === true) {
      return <SignUp />;
    } else {
      return <SignIn />;
    }
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    return (
      <Container>
        <Row>
          {/* <Col size="md-12"> */}
            <img className="logo" src={logo} alt="logo" />
          {/* </Col> */}
        </Row>

        {/* <SignIn>
          {this.state.user === null ? (
            <div>{this.renderSignIn()}</div>
          ) : (
            "Welcome @" + this.state.user.email.split("@")[0] + "!"
          )}
          {this.state.signUp === false ? (
            <div>
              If you don't have an account
              <button onClick={this.toggleSignUp}> Sign Up </button>!
            </div>
          ) : (
            <div>
              Already have an acount?
              <button onClick={this.toggleSignUp}> Sign In </button>
            </div>
          )}
        </SignIn> */}
        <Row>
          {/* <Col size="md-2"></Col>
          <Col size="md-10">  */}
            A portion managing app that does the counting for you
          {/* </Col>
          <Col size="md-2"></Col> */}
        </Row>

        {/* <button style={{ width: "65px" }} onClick={this.signOut}>
          {" "}
          Sign Out
        </button> */}
      </Container>
    );
  }
}

export default Home;
