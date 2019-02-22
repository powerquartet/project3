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

    endDrag(props) {
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

        return connectDragSource(
            this.props.size === 1 ?
                <div style={{ "float": "left" }}>
                    {this.props.showDelete ? <button onClick={() => (this.props.handleClick(this.props, this.props.meal))} style={{ " padding": "0", "border": "none", "color": "grey", "marginRight": "5px" }}>x</button> : ""}
                    {!isDragging && <div style={{ "border": "1px solid lightgrey", "borderRadius": "25%", "width": "72px", "height": "72px", "background": `url(${src})` }}></div>}
                    {isDragging && <div style={{ "border": "1px solid lightgrey", "borderRadius": "25%", "width": "72px", "height": "72px", "background": `url(${src})`, "opacity": "0.3" }}></div>}
                </div>
                :
                <div style={{ "float": "left" }}>
                    {this.props.showDelete ? <button onClick={() => (this.props.handleClick(this.props, this.props.meal))} style={{ " padding": "0", "border": "none", "color": "grey", "marginRight": "5px" }}>x</button> : ""}
                    {!isDragging && <div style={{ "border": "1px solid lightgrey", "borderRadius": "16px 0 0 16px", "width": "36px", "height": "72px", "background": `url(${src})` }}></div>}
                    {isDragging && <div style={{ "border": "1px solid lightgrey", "borderRadius": "16px 0 0 16px", "width": "36px", "height": "72px", "background": `url(${src})`, "opacity": "0.3" }}></div>}
                </div >
        )
    }
}

export default DragSource(Types.ITEM, itemSource, collect)(Item)