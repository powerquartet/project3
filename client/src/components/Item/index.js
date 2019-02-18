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
        const src = JSON.stringify(this.props.src);
        console.log(src);
        return connectDragSource(
            this.props.size === 1 ?
                < div>
                    {!isDragging && <div style={{ "width": "72px", "height": "72px", "background": `url(${src})` }}></div>}
                    {isDragging && <div><span>'ello {this.props.name}</span></div>
                    }
                </div >
                :
                < div>
                    {!isDragging && <div style={{ "width": "36px", "height": "72px", "background": `url(${src})` }}></div>}
                    {isDragging && <div><span>'ello {this.props.name}</span></div>
                    }
                </div >
        )
    }
}

export default DragSource(Types.ITEM, itemSource, collect)(Item)