import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

// import Item from "../../components/Item"

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: "1800",
            portions: [
                {
                    portion: 1.5,
                    type: "fruit"
                },
                {
                    portion: 2.5,
                    type: "vegetable"
                },
                {
                    portion: 6,
                    type: "grains"
                },
                {
                    portion: 5,
                    type: "protein"
                },
                {
                    portion: 3,
                    type: "dairy"
                }
            ],
            number: 0
        }
    }

    displayPortion = (portionItem, index) => {
        const list = [];
        const fraction = portionItem.portion % 1;

        for (let i = 0; i < portionItem.portion; i++) {
            list.push(<div style={{ "width": "80px", "height": "80px", "border": "5px solid blue", "float": "left", "margin": "5px" }}>{portionItem.type}</div>)
        }

        if (fraction !== 0) {
            list.push(<div style={{ "width": "40px", "height": "80px", "border": "5px solid blue", "float": "left", "margin": "5px" }}>{portionItem.type}</div>)
        }

        return list;
    }

    // moveItem = (id) => {
    //     console.log(`Deleting item with id: ${id}`)
    // }

    render() {
        const portions = this.state.portions.map((item, index) => {
            // return <Item portions={this.displayPortion(item, index)} />;
            return <div>{this.displayPortion(item, index)}</div>;

        })

        console.log(portions);

        return (
            <div>
                {/* <Toy src={img} id={index} key={index} handleDrop={(src) => this.deleteToy(src)} /> */}
                {portions}
                {/* {portions} */}
                {/* <Item item={portions} /> */}
            </div >
        );
    }
}

export default DragDropContext(HTML5Backend)(Grid);