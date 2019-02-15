import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import Item from "../../components/Item"
import Target from "../../components/Target"
import Counter from "../../components/Counter"

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: "1800",
            portions: [
                {
                    portion: 1.5,
                    type: "fruit",
                    measurement: "cups"
                },
                {
                    portion: 2.5,
                    type: "vegetable",
                    measurement: "cups"
                },
                {
                    portion: 6,
                    type: "grains",
                    measurement: "ounces"
                },
                {
                    portion: 5,
                    type: "protein",
                    measurement: "ounces"
                },
                {
                    portion: 3,
                    type: "dairy",
                    measurement: "cups"
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

        this.setState({
            newPortions: createdPortions
        })
    }

    //create portions based on the number provided by the database
    createPortions = (portionItem, index) => {
        const list = [];
        const fraction = portionItem.portion % 1;
        let i;
        // franction is not added with a forloop, therefore needs to start at 1
        if (fraction === 0) {
            i = 0
        } else {
            i = 1
        }
        for (i; i < portionItem.portion; i++) {
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
        this.decrementPortion(itemId);
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

    decrementPortion = (index) => {
        let portionIndex = parseInt(index.charAt(0));
        let isFraction = index.slice(3);
        //when and Item gets moved, decrement portion
        for (let i = 0; i < this.state.portions.length; i++) {
            if (portionIndex === i) {

                let stateCopy = Object.assign({}, this.state.portions);

                if (isFraction === ".5") {
                    stateCopy[i].portion -= 0.5;
                } else {
                    stateCopy[i].portion -= 1;
                }

                this.setState(stateCopy);
            };
        };
    }

    render() {

        const fruit = this.state.newPortions.map((portion, indx) => {
            return (portion.type === "fruit" ?
                <Item size={portion.size} type={portion.type} id={portion.id} key={portion.id} /> : "")
        });

        const vegetables = this.state.newPortions.map((portion, indx) => {
            return (portion.type === "vegetable" ?
                <Item size={portion.size} type={portion.type} id={portion.id} key={portion.id} /> : "")
        });
        const grains = this.state.newPortions.map((portion, indx) => {
            return (portion.type === "grains" ?
                <Item size={portion.size} type={portion.type} id={portion.id} key={portion.id} /> : "")
        });

        const protein = this.state.newPortions.map((portion, indx) => {
            return (portion.type === "protein" ?
                <Item size={portion.size} type={portion.type} id={portion.id} key={portion.id} /> : "")
        });

        const dairy = this.state.newPortions.map((portion, indx) => {
            return (portion.type === "dairy" ?
                <Item size={portion.size} type={portion.type} id={portion.id} key={portion.id} /> : "")
        });

        const targets = this.state.meals.map((meal, indx) => {
            return <Target portions={this.state.meals[indx].portions} meal={this.state.meals[indx].meal} key={meal.meal} handleDrop={(item, meal) => this.moveItem(item, meal)} />
        });

        return (
            <div>
                <Counter portionDailyTarget={this.state.portions} />
                <div style={{ "float": "left" }}>
                    {fruit}
                </div>
                <div style={{ "float": "left" }}>
                    {vegetables}
                </div>
                <div style={{ "float": "left" }}>
                    {grains}
                </div>
                <div style={{ "float": "left" }}>
                    {protein}
                </div>
                <div style={{ "float": "left" }}>
                    {dairy}
                </div>
                <br style={{ "clear": "both" }} />
                {targets}
            </div >
        );
    };
};

export default DragDropContext(HTML5Backend)(Grid);