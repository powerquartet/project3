import React from "react";
import "../Home/css/style.css";
import logo from "../Home/css/img/food.jpg";
import { auth } from "../../utils/firebase";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import HeaderLogin from "../../components/HeaderLogin";
import ControlledCarousel from "../../components/Carousel";
import Background from "../Home/css/img/strawberry.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signUp: false,
      toggleDisplay: false
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
      <Wrapper className="home-wrapper">
        {/* <Header /> */}
        <HeaderLogin
          handleDisplay={() => {
            this.toggleDisplay();
          }}
        />
        <Container>
          <Row className = "login">
            <Col size="md-12">
              {this.state.toggleDisplay ? (
                this.state.signUp === false ? (
                  <div>
                    <Row>
                      <Col size="md-12">{this.renderSignIn()}</Col>
                    </Row>
                    <Row>
                      <Col size="md-12">
                        If you don't have an account
                        <button onClick={this.toggleSignUp}> Sign Up </button>!
                      </Col>
                    </Row>
                  </div>
                ) : (
                  <div>
                    <Row>
                      <Col size="md-12">
                        {this.renderSignIn()}
                        Already have an account?
                        <button className = "signIn" onClick={this.toggleSignUp}> Sign In </button>
                      </Col>
                    </Row>
                  </div>
                )
              ) : (
                  <Row>
                    <Col size="md-12">
                <ControlledCarousel />
                    </Col>
                  </Row>
                // <img className="logo" src={logo} alt="logo" />
              )}
            </Col>
          </Row>

          {/* welcome message */}
          {/* {auth.currentUser === null ? (
              <div>{this.renderSignIn()}</div>
            ) : (
                "Welcome @" + auth.currentUser.email.split("@")[0] + "!"
              )} */}
        </Container>
      </Wrapper>
    );
  }
}

export default Home;
