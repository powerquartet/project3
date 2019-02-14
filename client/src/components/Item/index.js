import React, { Component } from "react";
import { DragSource } from "react-dnd";

const Types = {
    ITEM: "portion"
};

const itemSource = {
    beginDrag(props) {
        const item = { id: props.id }
        return item;
    },

    isDragging(props, monitor) {
        return monitor.getItem().id === props.id;
    },

    endDrag(props, monitor, component) {
        return props.id
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Item extends Component {
    render() {
        const { isDragging, connectDragSource } = this.props;
        return connectDragSource(
            <div>
                {!isDragging && <div>{this.props.type}</div>}
            </div>
        )
    }
}

export default DragSource(Types.ITEM, itemSource, collect)(Item)