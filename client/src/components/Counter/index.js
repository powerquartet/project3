import React, { Component } from "react";

class Counter extends Component {
    // Setting the initial state of the Counter component
    state = {
        plan: "1800",
        portions: [
            {
                portion: 1.5,
                type: "fruit"
            },
            {
                portion: 2.5,
                type: "vegetable"
            },
            {
                portion: 6,
                type: "grains"
            },
            {
                portion: 5,
                type: "protein"
            },
            {
                portion: 3,
                type: "dairy"
            }
        ],
    };

    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
    };

    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count - 1 });
    };

    // The render method returns the JSX that should be rendered
    render() {
        return (
            <div className="card text-center">
                <div className="card-header bg-primary text-white">
                    Click Counter!
          </div>
                <div className="card-body">
                    <p className="card-text">Click Count: {this.state.count}</p>
                    <button className="btn btn-primary" onClick={this.handleIncrement}>
                        Increment
            </button>{" "}
                    <button className="btn btn-danger" onClick={this.handleDecrement}>
                        Decrement
            </button>
                </div>
            </div>
        );
    }
}

export default Counter;