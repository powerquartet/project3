import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import Item from "../../components/Item"
import Target from "../../components/Target"

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
            newPortions: [],
            meals: [
                {
                    meal: "breakfast",
                    portions: []
                }
                ,
                {
                    meal: "snack-1",
                    portions: []
                },
                {
                    meal: "lunch",
                    portions: []
                },
                {
                    meal: "snack-2",
                    portions: []
                },
                {
                    meal: "dinner",
                    portions: []
                }]
        }
    }

    componentDidMount() {
        let createdPortions = this.state.portions.map((item, index) => {
            //creating arrays of portions
            return this.createPortions(item, index)
            //reducing them to one array
        }).reduce((allPortions, portionArrays) => {
            return allPortions.concat(portionArrays)
        }, []);

        console.log(createdPortions)

        this.setState({
            newPortions: createdPortions
        })
    }

    createPortions = (portionItem, index) => {
        const list = [];
        const fraction = portionItem.portion % 1;
        //create portions based on the number provided by the database
        for (let i = 0; i < portionItem.portion; i++) {
            list.push(
                {
                    type: portionItem.type,
                    id: index + "-" + i,
                    size: 1
                }
            )
        }
        //if there's a fraction of the portion remaining, add it as a 0.5 size
        if (fraction !== 0) {
            list.push(
                {
                    type: portionItem.type,
                    id: index + "-" + fraction,
                    size: fraction
                }
            )
        }
        // return an array of objects representing each portion of the particular food group
        return list;
    }

    moveItem = (itemId, meal) => {
        // console.log(`Meal target: ${meal} for item: ${itemId}`)
        // console.log(this.state.meals[0].portions);
        for (let i = 0; i < this.state.meals.length; i++) {

            if (meal === this.state.meals[i].meal) {

                for (let j = 0; j < this.state.newPortions.length; j++) {

                    if (itemId === this.state.newPortions[j].id) {

                        const portion = {
                            id: this.state.newPortions[j].id,
                            type: this.state.newPortions[j].type,
                            size: this.state.newPortions[j].size
                        }

                        const updatedPortions = this.state.newPortions.filter((portion) => {
                            return portion.id !== itemId
                        })

                        this.setState({
                            "meals.portionIds": this.state.meals[i].portions.push(portion),
                            "newPortions": updatedPortions
                        })

                    }

                }
            }
        }
    };

    render() {

        const portions = this.state.newPortions.map((portion, indx) => {
            return <Item size={portion.size} type={portion.type} id={portion.id} key={portion.id} />
        });

        const targets = this.state.meals.map((meal, indx) => {
            return <Target portions={this.state.meals[indx].portions} meal={this.state.meals[indx].meal} key={meal.meal} handleDrop={(item, meal) => this.moveItem(item, meal)} />
        });

        return (
            <div>
                {portions}
                {targets}
            </div >
        );
    };
};

export default DragDropContext(HTML5Backend)(Grid);