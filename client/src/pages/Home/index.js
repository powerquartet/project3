import React from "react";
import "../Home/css/style.css";
import logo from "../Home/css/img/food.jpg";
import { auth } from "../../utils/firebase";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import HeaderLogin from "../../components/HeaderLogin";
import ControlledCarousel from "../../components/Carousel";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signUp: false,
      toggleDisplay: false,
    };

    this.toggleSignUp = () => {
      this.setState({ signUp: !this.state.signUp });
    };

    this.toggleDisplay = () => {
      this.setState({ toggleDisplay: !this.state.toggleDisplay });
    };
  }

  renderSignIn() {
    console.log(this.state.signUp);
    if (this.state.signUp === true) {
      return <SignUp />;
    } else {
      return <SignIn />;
    }
  }

  render() {
    console.log(auth.currentUser);

    return (
      <Wrapper>
        <HeaderLogin
          handleDisplay={() => {
            this.toggleDisplay();
          }}
        />
        <Container>
          <Row>
            {/* <Col size="md-3"> */}
            {/* <img className="logo" src={logo} alt="logo" /> */}
            {/* </Col> */}

            {this.state.toggleDisplay ? (
              this.state.signUp === false ? (
                <div>
                  <div>{this.renderSignIn()}</div>
                  If you don't have an account
                  <button onClick={this.toggleSignUp}> Sign Up </button>!
                </div>
              ) : (
                  <div>
                    <div>{this.renderSignIn()}</div>
                    Already have an account?
                  <button onClick={this.toggleSignUp}> Sign In </button>
                  </div>
                )
            ) : (
                <div>
                  <ControlledCarousel />
                </div>
                // <img className="logo" src={logo} alt="logo" />
              )}

            {/* welcome message */}
            {/* {auth.currentUser === null ? (
              <div>{this.renderSignIn()}</div>
            ) : (
                "Welcome @" + auth.currentUser.email.split("@")[0] + "!"
              )} */}


          </Row>
          <Row>
            {/* <Col size="md-2"></Col>
          <Col size="md-10">  */}A
                      portion managing app that does the counting for you
            {/* </Col>
          <Col size="md-2"></Col> */}
          </Row>

          {/* <button style={{ width: "65px" }} onClick={this.signOut}>
            {" "}
            Sign Out
          </button> */}

        </Container>
      </Wrapper>
    );
  }
}

export default Home;
