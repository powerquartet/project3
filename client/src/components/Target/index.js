import React, { Component } from "react";
import { DropTarget } from 'react-dnd';

const itemSource = {
    beginDrag(props) {
        console.log('dragging...');
        return props.item;
    },
    endDrag(props, monitor, component) {
        return props.handleDrop(props.item.id);
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.DropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class Target extends Component {
    render() {
        const { connectDropTarget, hovered, item } = this.props;

        return connectDropTarget(
            <div className="target">
                Target
            </div>
        )
    }
}

export default DropTarget("item", {}, collect)(Target);