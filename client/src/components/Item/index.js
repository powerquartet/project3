import React, { Component } from "react";
import { DragSource } from "react-dnd";

console.log(props.portions)

const Types = {
    ITEM: "portion"
};

const itemSource = {
    beginDrag(props) {
        const item = {  }
        return item
    },
    endDrag(props, monitor, component) {
        return props.handleDrop(props.src)
    }
}

export default DragSource(Types.ITEM, itemSource, collect)(Item)
