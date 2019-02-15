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
        canDrop: monitor.canDrop()
    }
}

class Target extends Component {

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

        const portions = this.props.portions.map((portion, indx) => {
            return <Item size={portion.size} type={portion.type} id={portion.id} key={portion.id} />
        });

        return connectDropTarget(
            <div style={{ "float": "left", "height": "150px", "width": "250px", "border": "5px solid yellow" }}>
                <div style={{ "border": "5px solid green" }}>
                    {this.props.meal}
                </div>
                {portions}
            </div>

        )
    }
}

export default DropTarget(Types.ITEM, dropTarget, collect)(Target);