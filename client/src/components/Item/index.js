import React, { Component } from "react";
import { DragSource } from 'react-dnd';

const Types = {
    ITEM: "item"
};

const itemSource = {
    beginDrag(props) {
        /* code here */
    },
    endDrag(props) {
        /* code here */
    }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Toy extends Component {
    render() {
        const { isDragging, connectDragSource, src } = this.props
        return connectDragSource(
            /* code here */
        )
    }
}
export default DragSource(Types.ITEM, itemSource, collect)(Toy)


// const ItemTypes = {
//     ITEM: 'item'
// };

// const itemSource = {
//     beginDrag(props) {
//         console.log('dragging...');
//         return props.item;
//     },
//     endDrag(props, monitor, component) {
//         if (!monitor.didDrop()) {
//             return;
//         }
//         return props.handleDrop(props.item.id);
//     }
// }

// function collect(connect, monitor) {
//     return {
//         connectDragSource: connect.DragSource(),
//         connectDragPreview: connect.DragPreview(),
//         isDragging: monitor.isDragging(),
//     }
// }

// class Item extends Component {
//     render() {
//         const { isDragging, connectDragSource, item } = this.props;
//         const opacity = isDragging ? 0 : 1;

//         return connectDragSource(
//             <div className="item" style={{ opacity }}>
//                 <span>{item.name}</span>
//             </div>
//         )
//     }
// }

// export default DragSource(ItemTypes.ITEM, itemSource, collect)(Item);
