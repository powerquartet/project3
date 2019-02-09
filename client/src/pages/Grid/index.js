import React, { Component } from "react";
import Item from "../../components/Item";
// import Target from "../../components/Target";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class Grid extends Component {
    state = {
        items: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
        ]
    }

    moveItem = (id) => {
        console.log(`Deleting item with id: ${id}`)
    }

    render() {
        return (
            <div className="">
                <div className="">
                    {this.state.items.map((item, index) =>
                        <Item key={item.id} item={item} handleDrop={(id) =>
                            this.moveItem(id)
                        } />
                    )}
                </div>
                {/* <Target /> */}
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Grid);