import React, { Component } from "react";
import API from "../../utils/API";
import { auth } from "../../utils/firebase";

import Toggle from "../../components/Toggle";
import CardFlip from "../../components/CardFlip";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import "../../index.css";
import "../Portion/portion.css";
import "../Portion/arrowbtn.css";
import plans from "../../plans.json";
// import { FaAngleDown } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { IoMdHand } from "react-icons/io";
import { IoMdPizza } from "react-icons/io";


class Portion extends Component {
  constructor(props) {
    super(props);
    console.log(`here are your props: ${props} \n`);

    this.state = {
      toggleDisplay: false,
      plan: ""
    };

    this.toggleDisplay = () => {
      this.setState({ toggleDisplay: !this.state.toggleDisplay });
    };
  }

  componentDidMount() {
    // Display the userTier
    this.authListener();
  }
  authListener() {
    auth.onAuthStateChanged(user => {
      console.log(user.uid)
      if (user) {
        API.getsUser(user.uid)
          .then(res => {
            console.log(res);
            // let dbPortions = JSON.parse(res.data.portions);
            this.setState({
              // "portions": dbPortions,
              "plan": res.data.plan
            })
          })
          .catch(err => console.log(err));
      };
    });
  };


  render() {
    console.log(this.state.plan);
    return (
      <Wrapper className="portionWrapper">
        <div>
          <Navbar
            handleSignOut={this.props.handleSignOut}
          />
          <Container>
            <h1 className="formIntro">Check out your daily plan!</h1>
            {/* <h2>Welcome to your Daily Portion.</h2>
            <span className="welcome">Please click on each food group to see more.</span> */}
            {this.state.toggleDisplay ? (

              <div>
                <Row>
                  <Col size="md-12">
                    <CardFlip />
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12">
                    <button className="btn btn-danger btn-arrow-right" onClick={this.toggleDisplay}>
                      My Daily Portions <IoMdPizza />
                    </button>
                  </Col>
                </Row>
              </div>
            ) : (

                <div className="planName">
                  <Row>
                    <Col size="md-12">
                      {this.props.userTier === plans[0].plan ? "" : ""}
                      {/* <div> Your plane here: {plans[0].portions[0].type}</div> */}
                      <div> Your plan: {plans.plan}</div>
                    </Col>
                  </Row>

                  <Row>
                    <Col size="md-12">
                      {/* <div className="toggleButtons"> */}

                      <Toggle>
                        {({ on, toggle }) => (
                          <div className="card-container">
                            {on && (
                              <div className="card">
                                <ul>
                                  {/* <ul style={{ "margin-left": "25%", "color": "grey", "font-size": "20px" }}> */}
                                  <li>1.5 cups means... </li>
                                  <li>1 cup raw frozen or canned</li>
                                  <li>1/2 cups dried</li>
                                </ul>
                              </div>
                            )}
                            <button className="food-group" onClick={toggle}>
                              Fruits <TiArrowForwardOutline />
                            </button>
                          </div>
                        )}
                      </Toggle>
                    </Col>

                    <Col size="md-12">
                      <Toggle>
                        {({ on, toggle }) => (
                          <div className="card-container">
                            {on && (
                              <div className="card">
                                <ul>
                                  <li>2.5 cups means... </li>
                                  <li>1 cup raw frozen or canned</li>
                                  <li>2 cups leafy</li>
                                  <li>1 cup juiced</li>
                                </ul>
                              </div>
                            )}
                            <button className="food-group" onClick={toggle}>
                              Vegetables <TiArrowForwardOutline />
                            </button>
                          </div>
                        )}
                      </Toggle>
                    </Col>

                    <Col size="md-12">
                      <Toggle>
                        {({ on, toggle }) => (
                          <div className="card-container">
                            {on && (
                              <div className="card">
                                <ul>
                                  <li>5 oz means... </li>
                                  <li>1 oz cooked or canned</li>
                                  {/* <li>(lean meat/poultry/seafood)</li> */}
                                  {/* <li>Ex: 1 egg, 1 tbsp peanut butter</li> */}
                                  <li>1/4 cup cooked beans pr peas</li>
                                  <li>1/2 oz of nuts or seeds</li>
                                </ul>
                              </div>
                            )}
                            <button className="food-group" onClick={toggle}>
                              Protein <TiArrowForwardOutline />
                            </button>
                          </div>
                        )}
                      </Toggle>
                    </Col>

                    <Col size="md-12">
                      <Toggle>
                        {({ on, toggle }) => (
                          <div className="card-container">
                            {on && (
                              <div className="card">
                                <ul>
                                  <li>6 oz means... </li>
                                  <li>1 slice of bread</li>
                                  <li>1 oz of dry cereal</li>
                                </ul>
                              </div>
                            )}
                            <button className="food-group" onClick={toggle}>
                              Grains <TiArrowForwardOutline />
                            </button>
                          </div>
                        )}
                      </Toggle>
                    </Col>

                    <Col size="md-12">
                      <Toggle>
                        {({ on, toggle }) => (
                          <div className="card-container">
                            {on && (
                              <div className="card">
                                <ul>
                                  <li>3 cups means... </li>
                                  <li>1 cup of milk/yogurt</li>
                                  {/* <li>1 cup of yogurt</li> */}
                                  <li>1.5 oz of natural cheese</li>
                                  <li>1 cup of processed cheese</li>
                                </ul>
                              </div>
                            )}
                            <button className="food-group" onClick={toggle}>
                              Dairy <TiArrowForwardOutline />
                            </button>
                          </div>
                        )}
                      </Toggle>
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-12">
              
                      <button className="btn btn-danger btn-arrow-right" onClick={this.toggleDisplay}>
                        How Do I Hand Portion? <IoMdHand />
                      </button>
                    </Col>
                  </Row>
                </div>
              )}
          </Container>
        </div>

      </Wrapper>
    );
  }
}

export default Portion;
