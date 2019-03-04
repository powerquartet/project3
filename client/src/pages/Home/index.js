import React from "react";
import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import HeaderLogin from "../../components/HeaderLogin";
import ControlledCarousel from "../../components/Carousel";
import "../../index.css";

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
    return (
      <Wrapper className="home-wrapper">
        <HeaderLogin
          handleDisplay={() => {
            this.toggleDisplay();
          }}
        />
        <Container>
          <Row className="login">
            <Col size="md-12">
              < h2 > A food portioning app that makes meal management fun and easy </h2>
              <h2> Click 'Get Started'
             to make your profile today! </h2>
              {this.state.toggleDisplay ? (
                this.state.signUp === false ? (
                  <div>
                    <div>{this.renderSignIn()}</div>
                    <p class="sign-up">Need an account? <button class="sign-up-link" onClick={this.toggleSignUp}>Sign Up</button></p>
                  </div>
                ) : (
                    <div>
                      <div>{this.renderSignIn()}</div>
                      <p class="sign-up">Need an account?<button class="sign-up-link" onClick={this.toggleSignUp}>Sign In</button></p>
                    </div>
                  )
              ) : (
                  <div>
                    <ControlledCarousel />
                  </div>
                )}

            </Col>
          </Row>
        </Container>
      </Wrapper >
    );
  }
}

export default Home;