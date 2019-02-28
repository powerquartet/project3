import React from "react";
import ReactCardFlip from "react-card-flip";
import "../../index.css";
import Wrapper from "../../components/Wrapper";
import Col from "../../components/Col";
import Row from "../../components/Row";
// import handportions from "./images";


// import PropTypes from "prop-types";

class CardFlip extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [{
                // handportions: handportions.id,
                isFlipped: false
            }]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {

        console.log(name)

        this.setState({ [name]: !this.state[name] });
    }

    render() {
        console.log(this.state)
        return (
            <Wrapper style={{ display: "flex" }}>
                <div>
                    <Row>
                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.handful}>
                                <div key="front" className="measurement">
                                    <img onClick={() => this.handleClick("handful")}
                                        src={require("./images/handful.png")}
                                        alt="hand" />
                                </div>

                                <div key="back">
                                    <div onClick={() => this.handleClick("handful")} className="measurement">
                                        Handful = 1/2 Cup
                                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.flathand}>
                                <div key="front" className="measurement">
                                    <img onClick={() => this.handleClick("flathand")}
                                        src={require("./images/flathand.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div value="flathand" onClick={() => this.handleClick("flathand")} className="measurement">
                                        Flat Hand = 1 Slice
                                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.onefist}>
                                <div key="front" className="measurement">
                                    <img onClick={() => this.handleClick("onefist")}
                                        src={require("./images/onefist.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={() => this.handleClick("onefist")} className="measurement">
                                        One Fist = 1 Cup
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.palm}>
                                <div key="front" className="measurement">
                                    <img onClick={() => this.handleClick("palm")}
                                        src={require("./images/palm.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={() => this.handleClick("palm")} className="measurement">
                                        Palm = 3 oz
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>
                    </Row>
                    <br></br>

                    <Row>
                        <Col size="md-4">
                            <ReactCardFlip isFlipped={this.state.pointerfinger}>
                                <div key="front" className="measurement">
                                    <img onClick={() => this.handleClick("pointerfinger")}
                                        src={require("./images/pointerfinger.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={() => this.handleClick("pointerfinger")} className="measurement">
                                        Pointer Finger = 1 1/2 oz
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-4">
                            <ReactCardFlip isFlipped={this.state.thumb}>
                                <div key="front" className="measurement">
                                    <img onClick={() => this.handleClick("thumb")}
                                        src={require("./images/thumb.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={() => this.handleClick("thumb")} className="measurement">
                                        Thumb = 1 Tablespoon
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-4">
                            <ReactCardFlip isFlipped={this.state.twofist}>
                                <div key="front" className="measurement">
                                    <img onClick={() => this.handleClick("twofist")}
                                        src={require("./images/twofist.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={() => this.handleClick("twofist")} className="measurement">
                                        Two Fists = 2 Cups
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>
                    </Row>
                </div>
            </Wrapper >
        );
    }
};
export default CardFlip;