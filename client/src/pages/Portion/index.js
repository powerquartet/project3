import React, { Component } from "react";
import Toggle from "../../components/Toggle";
import CardFlip from "../../components/CardFlip";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import "../Portion/css/style.css";
import plans from "../../plans.json";

class Portion extends Component {
  constructor(props) {
    super(props);
    console.log(`here are your props: ${props} \n`);

    this.state = {
      toggleDisplay: false
    };

    this.toggleDisplay = () => {
      this.setState({ toggleDisplay: !this.state.toggleDisplay });
    };
  }


  render() {
    return (
      <div>
        <Header />
        <span>Welcome to your Daily Portion. Please Click to see more.</span>
        {this.state.toggleDisplay ? (

          <div>
            <Row>
              <Col size="md-12">
                <CardFlip />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <button onClick={this.toggleDisplay}>My Daily Portions</button>
              </Col>
            </Row>
          </div>
        ) : (

            <div>
              {this.props.userTier == plans[0].plan ? "" : ""}
              {/* <div> Your plane here: {plans[0].portions[0].type}</div> */}
              <div> Your plane here: {plans[0].plan}</div>
              <Row>
                <Col size="md-12">
                  {/* <div className="toggleButtons"> */}

                  <Toggle>
                    {({ on, toggle }) => (
                      <div className="card-container">
                        {on && (
                          <div className="card">
                            <ul style={{ "margin-left": "25%", "color": "grey", "font-size": "20px" }}>
                              <li>1.5 cups means... </li>
                              <li>1 cup raw frozen or canned</li>
                              <li>1/2 cups dried</li>
                            </ul>
                          </div>
                        )}
                        <button className="food-group" onClick={toggle}>
                          Fruits ===>
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
                            <ul style={{ "margin-left": "25%", "color": "grey", "font-size": "20px" }}>
                              <li>2.5 cups means... </li>
                              <li>1 cup raw frozen or canned</li>
                              <li>2 cups leafy</li>
                              <li>1 cup juiced</li>
                            </ul>
                          </div>
                        )}
                        <button className="food-group" onClick={toggle}>
                          Vegetables ===>
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
                            <ul style={{ "margin-left": "25%", "color": "grey", "font-size": "20px" }}>
                              <li>5 oz means... </li>
                              <li>1 oz cooked or canned</li>
                              <li>(lean meat/poultry/seafood)</li>
                              <li>Ex: 1 egg, 1 tbsp peanut butter</li>
                              <li>1/4 cup cooked beans pr peas</li>
                              <li>1/2 oz of nuts or seeds</li>
                            </ul>
                          </div>
                        )}
                        <button className="food-group" onClick={toggle}>
                          Protein ===>
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
                            <ul style={{ "margin-left": "25%", "color": "grey", "font-size": "20px" }}>
                              <li>6 oz means... </li>
                              <li>1 slice of bread</li>
                              <li>1 oz of dry cereal</li>
                            </ul>
                          </div>
                        )}
                        <button className="food-group" onClick={toggle}>
                          Grains ===>
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
                            <ul style={{ "margin-left": "25%", "color": "grey", "font-size": "20px" }}>
                              <li>3 cups means... </li>
                              <li>1 cup of milk</li>
                              <li>1 cup of yogurt</li>
                              <li>1 oz of fat cheese</li>
                              <li>1.5 oz of natural cheese</li>
                              <li>1 cup of processed cheese</li>
                            </ul>
                          </div>
                        )}
                        <button className="food-group" onClick={toggle}>
                          Dairy ===>
                      </button>
                      </div>
                    )}
                  </Toggle>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                  <button onClick={this.toggleDisplay}>
                    How Do I Hand Portion?
                </button>
                </Col>
              </Row>
            </div>
          )}
      </div>
    );
  }
}

export default Portion;
