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
            this.props.size === 1 ?
                < div style={{ "width": "80px", "margin": "5px", "border": "1px solid black" }}>
                    {!isDragging && <span>{this.props.type}</span>}
                    {isDragging && <div style={{ "width": "80px", "margin": "5px", "color": "lightgrey", "border": "1px solid lightgrey" }}>{this.props.type}</div>}

                </div >
                :
                < div style={{ "width": "40px", "margin": "5px", "border": "1px solid black" }}>
                    {!isDragging && <span>{this.props.type}</span>}
                    {isDragging && <div style={{ "width": "40px", "margin": "5px", "color": "lightgrey", "border": "1px solid lightgrey" }}>{this.props.type}</div>}

                </div >
        )
    }
}

export default DragSource(Types.ITEM, itemSource, collect)(Item)