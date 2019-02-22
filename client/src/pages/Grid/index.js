import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import Item from "../../components/Item"
import Target from "../../components/Target"
import Counter from "../../components/Counter"
import plans from "../../plans.json";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

//Acess plan from the json tier object
let plan = plans[0].plan;
let portions = plans[0].portions;

class Grid extends Component {
    constructor(props) {
        super(props);
        this.original = {};
        this.state = {
            showDelete: false,
            plan,
            portions,
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
        this.makeNewPortions();
        // this.original = Object.assign({}, this.state);
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
                    size: 1,
                    src: portionItem.img
                }
            )
        }
        //if there's a fraction of the portion remaining, add it as a 0.5 size
        if (fraction !== 0) {
            list.push(
                {
                    type: portionItem.type,
                    id: index + "-" + fraction,
                    size: fraction,
                    src: portionItem.imgHalf
                }
            )
        }
        // return an array of objects representing each portion of the particular food group
        return list;
    }

    makeNewPortions = () => {
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
    moveItem = (itemId, meal) => {
        this.decrementPortion(itemId);

        for (let i = 0; i < this.state.meals.length; i++) {

            if (meal === this.state.meals[i].meal) {

                for (let j = 0; j < this.state.newPortions.length; j++) {

                    if (itemId === this.state.newPortions[j].id) {

                        const portion = {
                            id: this.state.newPortions[j].id,
                            type: this.state.newPortions[j].type,
                            size: this.state.newPortions[j].size,
                            src: this.state.newPortions[j].src,
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

    moveBack = (item, meal) => {

        this.setState({
            showDelete: false
        })

        this.incrementPortion(item.id);
        // push portion back to the newPortions array
        const updatedPortions = this.state.newPortions;
        updatedPortions.push(item);
        let updatedMeals = [...this.state.meals];

        for (let i = 0; i < this.state.meals.length; i++) {
            if (this.state.meals[i].meal === meal) {
                for (let j = 0; j < this.state.meals[i].portions.length; j++) {

                    if (item.id === this.state.meals[i].portions[j].id) {
                        //Delete portion from target meal
                        const updatedMeal = this.state.meals[i].portions.filter((portion) => {
                            return portion.id !== item.id
                        });

                        updatedMeals[i].portions[j] = updatedMeal;

                    }

                    this.setState({
                        "meals": updatedMeals,
                        "newPortions": updatedPortions
                    })
                }
            }
        }
    }

    incrementPortion = (index) => {
        let portionIndex = parseInt(index.charAt(0));
        let isFraction = index.slice(3);
        //when and Item gets moved, decrement portion
        for (let i = 0; i < this.state.portions.length; i++) {
            if (portionIndex === i) {

                let stateCopy = Object.assign({}, this.state.portions);

                if (isFraction === ".5") {
                    stateCopy[i].portion += 0.5;
                } else {
                    stateCopy[i].portion += 1;
                }

                this.setState(stateCopy);
            };
        };
    }

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

    //TODO Where to capture the intial state? Should it start with that?
    setInitialState = () => {
        this.setState(this.original);
    }

    render() {
        console.log(this.state.newPortions);
        const fruit = this.state.newPortions.map((portion) => {
            return (portion.type === "fruit" ?
                <Item
                    src={portion.src}
                    showDelete={this.state.showDelete}
                    size={portion.size}
                    type={portion.type}
                    id={portion.id}
                    key={portion.id}
                // handleClick={(item, meal) => this.moveBack(item, meal)}
                />
                : "")
        });

        const vegetables = this.state.newPortions.map((portion) => {
            return (portion.type === "vegetable" ?
                <Item
                    src={portion.src}
                    showDelete={this.state.showDelete}
                    size={portion.size}
                    type={portion.type}
                    id={portion.id}
                    key={portion.id}
                // handleClick={(item, meal) => this.moveBack(item, meal)}
                />
                : "")
        });
        const grains = this.state.newPortions.map((portion) => {
            return (portion.type === "grains" ?
                <Item
                    src={portion.src}
                    showDelete={this.state.showDelete}
                    size={portion.size}
                    type={portion.type}
                    id={portion.id}
                    key={portion.id}
                // handleClick={(item, meal) => this.moveBack(item, meal)}
                />
                : "")
        });

        const protein = this.state.newPortions.map((portion) => {
            return (portion.type === "protein" ?
                <Item
                    src={portion.src}
                    showDelete={this.state.showDelete}
                    size={portion.size}
                    type={portion.type}
                    id={portion.id}
                    key={portion.id}
                // handleClick={(item, meal) => this.moveBack(item, meal)}
                />
                : "")
        });

        const dairy = this.state.newPortions.map((portion) => {
            return (portion.type === "dairy" ?
                <Item
                    src={portion.src}
                    showDelete={this.state.showDelete}
                    size={portion.size}
                    type={portion.type}
                    id={portion.id}
                    key={portion.id}
                // handleClick={(item, meal) => this.moveBack(item, meal)}
                />
                : "")
        });

        const targets = this.state.meals.map((meal, index) => {
            return <Target
                portions={this.state.meals[index].portions}
                meal={this.state.meals[index].meal}
                key={meal.meal}
                handleDrop={(item, meal) => this.moveItem(item, meal)}
                handleClick={(item, meal) => { this.moveBack(item, meal) }}
            />
        });

        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-4">
                            <Counter portionDailyTarget={this.state.portions} />
                        </Col>
                        <Col size="md-8">{fruit}
                            <br style={{ "clear": "both" }} />
                            {vegetables}
                            <br style={{ "clear": "both" }} />
                            {grains}
                            <br style={{ "clear": "both" }} />
                            {protein}
                            <br style={{ "clear": "both" }} />
                            {dairy}
                            <br style={{ "clear": "both" }} />
                        </Col>
                    </Row>
                    <Row>
                        {targets}
                    </Row>
                    <Row>
                        <button onClick={() => this.setInitialState()}>CLEAR</button>
                    </Row>
                </Container>

            </div >
        );
    };
};

export default DragDropContext(HTML5Backend)(Grid);