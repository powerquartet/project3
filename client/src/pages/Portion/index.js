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
        {this.state.toggleDisplay ? (
          <div>
    
            <Row>
              <Col size="md-12">
                {/* <div className="toggleButtons"> */}

                <Toggle>
                  {({ on, toggle }) => (
                    <div className="card-container">
                      {on && (
                        <div className="card">
                          1.5 cups means 1 cup raw, frozen or canned / .5 cups
                          dried
                        </div>
                      )}
                      <button className="food-group" onClick={toggle}>
                        Fruits
                      </button>
                    </div>
                  )}
                </Toggle>

                <Toggle>
                  {({ on, toggle }) => (
                    <div className="card-container">
                      {on && (
                        <div className="card">
                          2.5 cups means 1 cup raw, frozen or canned / 2 cups
                          leafy / 1 cup juiced
                        </div>
                      )}
                      <button className="food-group" onClick={toggle}>
                        Vegetables
                      </button>
                    </div>
                  )}
                </Toggle>

                <Toggle>
                  {({ on, toggle }) => (
                    <div className="card-container">
                      {on && (
                        <div className="card">
                          5 oz means 1 oz cooked or canned lean meat like
                          poultry or seafood / 1 egg / 1 tbsp peanut butter /
                          1/4 cup cooked beans or peas / 1/2 oz of nuts or seeds
                        </div>
                      )}
                      <button className="food-group" onClick={toggle}>
                        Protein
                      </button>
                    </div>
                  )}
                </Toggle>

                <Toggle>
                  {({ on, toggle }) => (
                    <div className="card-container">
                      {on && (
                        <div className="card">
                          6 oz means 1 slice of bread / 1 oz of ready to eat
                          cereal
                        </div>
                      )}
                      <button className="food-group" onClick={toggle}>
                        Grains
                      </button>
                    </div>
                  )}
                </Toggle>

                <Toggle>
                  {({ on, toggle }) => (
                    <div className="card-container">
                      {on && (
                        <div className="card">
                          3 cups means 1 cup of milk / 1 cup of yogurt / 1 oz of
                          fat cheese / 1.5 oz of natural cheese / 1 cup of
                          procedded cheese
                        </div>
                      )}
                      <button className="food-group" onClick={toggle}>
                        Dairy
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
        ) : (
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
        )}
        <Navbar/>
      </div>
    );
  }
}

export default Portion;
