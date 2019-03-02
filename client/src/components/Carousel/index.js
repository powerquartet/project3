import React from "react";
import "../../index.css";
// import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel";

class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
            >

                <Carousel.Item>
                    <img
                        className="screenshot"
                        src={require("./images/enterdetails.png")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                        <p>Enter your details!</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="screenshot"
                        src={require("./images/portion.png")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3> */}
                        <p>Get personalized plans.</p>

                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="screenshot"
                        src={require("./images/mealplanner.png")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3> */}
                        <p>Plan and portion your meals in a fun and dynamic way! </p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
 
            </Carousel >
        );
    }
}
export default ControlledCarousel;