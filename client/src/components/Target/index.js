import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Item from "../Item";

const Types = {
    ITEM: "portion"
};

const dropTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem().id;
        const meal = props.meal;

        return props.handleDrop(item, meal)
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }
}

class Target extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.props.handleClick.bind(this);
    }

    render() {

        // const { canDrop, isOver, connectDropTarget, portions } = this.props;
        // const isActive = canDrop && isOver;
        // const style = {
        //     width: "200px",
        //     height: "404px",
        //     border: '1px dashed gray'
        // };
        // const backgroundColor = isActive ? 'lightgreen' : '#FFF';

        const { connectDropTarget } = this.props;
        const portions = this.props.portions.map((portion, index) => {
            return <Item
                src={portion.src}
                showDelete={true}
                size={portion.size}
                type={portion.type}
                id={portion.id}
                meal={this.props.meal}
                key={portion.id}
                handleClick={this.handleClick}
            />

        });

        return connectDropTarget(
            <div style={{ "height": "100px", "width": "400px", "border": "1px solid lightgrey", "borderRadius": "7px", "margin": "5px" }}>
                <div style={{ "borderBottom": "1px solid lightgrey", "color": "grey" }}>
                    {this.props.meal}
                </div>
                {portions}
            </div>

        )
    }
}

export default DropTarget(Types.ITEM, dropTarget, collect)(Target);