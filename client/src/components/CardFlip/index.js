import React from "react";
import ReactCardFlip from "react-card-flip";
import "./style.css";
import Wrapper from "../../components/Wrapper";
import Col from "../../components/Col";
import Row from "../../components/Row";


// import PropTypes from "prop-types";
// import handportions from "images"


class CardFlip extends React.Component {
    constructor() {
        super();
        this.state = {
            // handportions: handportions,
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        console.log(this.handportions)
        return (
            <Wrapper>
                <div>
                    <Row>
                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.isFlipped}>
                                <div key="front" className="measurement">
                                    <img onClick={this.handleClick}
                                        src={require("./images/handful.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={this.handleClick} className="measurement">
                                        1/2 Cup
                                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.isFlipped}>
                                <div key="front" className="measurement">
                                    <img onClick={this.handleClick}
                                        src={require("./images/flathand.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={this.handleClick} className="measurement">
                                        1 Slice
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.isFlipped}>
                                <div key="front" className="measurement">
                                    <img onClick={this.handleClick}
                                        src={require("./images/onefist.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={this.handleClick} className="measurement">
                                        1 Cup
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-3">
                            <ReactCardFlip isFlipped={this.state.isFlipped}>
                                <div key="front" className="measurement">
                                    <img onClick={this.handleClick}
                                        src={require("./images/palm.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={this.handleClick} className="measurement">
                                        3 oz
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>
                    </Row>
                    <br></br>

                    <Row>
                        <Col size="md-4">
                            <ReactCardFlip isFlipped={this.state.isFlipped}>
                                <div key="front" className="measurement">
                                    <img onClick={this.handleClick}
                                        src={require("./images/pointerfinger.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={this.handleClick} className="measurement">
                                        1 1/2 oz
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-4">
                            <ReactCardFlip isFlipped={this.state.isFlipped}>
                                <div key="front" className="measurement">
                                    <img onClick={this.handleClick}
                                        src={require("./images/thumb.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={this.handleClick} className="measurement">
                                        1 Tablespoon
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>

                        <Col size="md-4">
                            <ReactCardFlip isFlipped={this.state.isFlipped}>
                                <div key="front" className="measurement">
                                    <img onClick={this.handleClick}
                                        src={require("./images/twofist.png")}
                                        alt="hand" />
                                </div>

                                <div key="back" className="measurement">
                                    <div onClick={this.handleClick} className="measurement">
                                        2 Cups
                    </div>
                                </div >
                            </ReactCardFlip >
                        </Col>
                    </Row>
                </div>
            </Wrapper>
        );
    }
};

export default CardFlip;