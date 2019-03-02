import React, { Component } from "react";
import API from "../../utils/API";
import { auth } from "../../utils/firebase";
import { Redirect } from "react-router-dom";

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
import { TiArrowForwardOutline } from "react-icons/ti";
import { IoMdHand } from "react-icons/io";
import { IoMdPizza } from "react-icons/io";
import { IoMdGrid } from "react-icons/io";

class Portion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleDisplay: false,
      toGrid: false,
      plan: ""
    };

    this.toggleDisplay = () => {
      this.setState({ toggleDisplay: !this.state.toggleDisplay });
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged(user => {
      if (user) {
        API.getsUser(user.uid)
          .then(res => {
            // console.log(res);
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

  toGrid() {
    this.setState({
      "toGrid": true
    })
  }

  render() {
    return (
      < Wrapper className="portionWrapper" >
        <div>
          {this.state.toGrid ? <Redirect to="/grid" /> : " "}
          <Navbar
            handleSignOut={this.props.handleSignOut}
          />
          <Container>
            <h1 className="formIntro" style={{ fontFamily: 'Quicksand' }}>Check out your daily plan!</h1>
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
                      My portions breakdown <IoMdPizza />
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-12">
                    <button className="btn btn-success btn-arrow-right" style={{ "marginTop": "0" }} onClick={() => { this.toGrid() }}>
                      Go to your portion map <IoMdGrid />
                    </button>
                  </Col>
                </Row>
              </div>
            ) : (
                <div className="planName">
                  <Row>
                    <Col size="md-12">
                      <div> Your plan: {this.state.plan}</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-12">
                      <Toggle>
                        {({ on, toggle }) => (
                          <div className="card-container">
                            {on && (
                              <div className="card">
                                <p>What is a portion of fruit?</p>
                                <ul>
                                  <li>1 cup raw frozen or canned</li>
                                  <li>1/2 cups dried</li>
                                </ul>
                              </div>
                            )}
                            <button className="food-group" onClick={toggle}>
                              Fruit <TiArrowForwardOutline />
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
                                < p > What is a portion of fruit? </p>
                                <ul>
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
                                < p > What is a portion of protein? </p>
                                <ul>

                                  <li>1 oz cooked or canned</li>
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
                                < p > What is a portion of grain? </p>
                                <ul>

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
                                < p > What is a portion of dairy? </p>
                                <ul>

                                  <li>1 cup of milk/yogurt</li>
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
                  <Row>
                    <Col size="md-12">
                      <button className="btn btn-success btn-arrow-right" style={{ "marginTop": "0" }} onClick={() => { this.toGrid() }}>
                        Go to your portion map <IoMdGrid />
                      </button>
                    </Col>
                  </Row>
                </div>
              )}
          </Container>
        </div>

      </Wrapper >
    );
  }
}

export default Portion;
