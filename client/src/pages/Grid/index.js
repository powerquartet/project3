import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import MultiBackend, { Preview } from "../../utils/index";
import HTML5toTouch from "../../utils/HTML5toTouch";
import objectAssign from "object-assign";
import API from "../../utils/API";
import { auth } from "../../utils/firebase";

import Item from "../../components/Item";
import Target from "../../components/Target";
import Counter from "../../components/Counter";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
// import Header from "../../components/Header";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "../../index.css";
import "./grid.css";

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialState: {},
      showDelete: false,
      plan: "",
      portions: [],
      newPortions: [],
      meals: [
        {
          meal: "breakfast",
          portions: []
        },
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
        }
      ]
    };
  }

  componentDidMount() {
    // Display the number values for portions as separate items
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged(user => {
      console.log(user.uid)
      if (user) {
        API.getsUser(user.uid)
          .then(res => {
            let dbPortions = JSON.parse(res.data.portions);
            this.setState({
              "portions": dbPortions,
              "plan": res.data.plan
            })

            this.makeNewPortions();

          })
          .catch(err => console.log(err));
      };
    });
  };

  generatePreview(type, item, style) {
    objectAssign(style, { "border": "1px solid lightgrey", "borderRadius": "25%", "width": "72px", "height": "72px", "background": `url(${item.src})` });

    return <div key={type + "-" + item.id} style={style}></div>;
  }

  //Create portions based on the number provided by the database
  createPortions = (portionItem, index) => {
    const list = [];
    const fraction = portionItem.portion % 1;
    let i;
    // franction is not added with a forloop, therefore needs to start at 1
    if (fraction === 0) {
      i = 0;
    } else {
      i = 1;
    }
    for (i; i < portionItem.portion; i++) {
      list.push({
        type: portionItem.type,
        id: index + "-" + i,
        size: 1,
        src: portionItem.img
      });
    }
    //if there's a fraction of the portion remaining, add it as a 0.5 size
    if (fraction !== 0) {
      list.push({
        type: portionItem.type,
        id: index + "-" + fraction,
        size: fraction,
        src: portionItem.imgHalf
      });
    }
    // return an array of objects representing each portion of the particular food group
    return list;
  };

  makeNewPortions = () => {
    const createdPortions = this.state.portions
      .map((item, index) => {
        //creating arrays of portions
        return this.createPortions(item, index);
        //reducing them to one array
      })
      .reduce((allPortions, portionArrays) => {
        return allPortions.concat(portionArrays);
      }, []);

    // Save a copy of the initial state
    const initialState = Object.assign({}, this.state.initialState);
    initialState.newPortions = createdPortions;
    initialState.portions = [...this.state.portions];
    initialState.meals = [...this.state.meals];

    //Make a deep copy of the object, so it won't update with the state
    const newObj = JSON.parse(JSON.stringify(initialState));

    this.setState({
      newPortions: createdPortions,
      initialState: newObj
    });
  };

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
              src: this.state.newPortions[j].src
            };

            const updatedPortions = this.state.newPortions.filter(portion => {
              return portion.id !== itemId;
            });

            this.setState({
              "meals.portionIds": this.state.meals[i].portions.push(portion),
              newPortions: updatedPortions
            });
          }
        }
      }
    }
  };

  moveBack = (item, meal) => {
    //In order not to display the delete button the state returns to false
    this.setState({
      showDelete: false
    });

    this.incrementPortion(item.id);

    const movedPortion = {};
    movedPortion.type = item.type;
    movedPortion.id = item.id;
    movedPortion.size = item.size;
    movedPortion.src = item.src;

    console.log(movedPortion);

    // Push portion back to the newPortions array
    const updatedPortions = this.state.newPortions;
    updatedPortions.push(movedPortion);

    const updatedMealsTarget = [...this.state.meals];

    for (let i = 0; i < this.state.meals.length; i++) {
      if (this.state.meals[i].meal === meal) {
        for (let j = 0; j < this.state.meals[i].portions.length; j++) {
          if (item.id === this.state.meals[i].portions[j].id) {
            //Delete portion from target meal
            const updatedTarget = this.state.meals[i].portions.filter(
              portion => {
                return portion.id !== item.id;
              }
            );
            updatedMealsTarget[i].portions = updatedTarget;
          }

          this.setState({
            meals: updatedMealsTarget,
            newPortions: updatedPortions
          });
        }
      }
    }
  };

  incrementPortion = index => {
    const portionIndex = parseInt(index.charAt(0));
    const isFraction = index.slice(3);

    //When an Item gets moved back, increment portion
    for (let i = 0; i < this.state.portions.length; i++) {
      if (portionIndex === i) {
        const stateCopy = Object.assign({}, this.state.portions);

        if (isFraction === ".5") {
          stateCopy[i].portion += 0.5;
        } else {
          stateCopy[i].portion += 1;
        }

        this.setState(stateCopy);
      }
    }
  };

  decrementPortion = index => {
    const portionIndex = parseInt(index.charAt(0));
    const isFraction = index.slice(3);

    //When an Item gets moved, decrement portion
    for (let i = 0; i < this.state.portions.length; i++) {
      if (portionIndex === i) {
        const stateCopy = Object.assign({}, this.state.portions);

        if (isFraction === ".5") {
          stateCopy[i].portion -= 0.5;
        } else {
          stateCopy[i].portion -= 1;
        }

        this.setState(stateCopy);
      }
    }
  };

  setInitialState = () => {
    //Making a copy of the saved initialState state
    const initialPortions = [...this.state.initialState.portions];
    const initialNewPortions = [...this.state.initialState.newPortions];
    const initialMeals = [...this.state.initialState.meals];

    //Pushing it to the display
    this.setState({
      portions: initialPortions,
      newPortions: initialNewPortions,
      meals: initialMeals
    });
  };

  render() {

    const fruit = this.state.newPortions.map(portion => {
      return portion.type === "fruit" ? (
        <Item
          src={portion.src}
          showDelete={this.state.showDelete}
          size={portion.size}
          type={portion.type}
          id={portion.id}
          key={portion.id}
        />
      ) : (
          ""
        );
    });

    const vegetables = this.state.newPortions.map(portion => {
      return portion.type === "vegetable" ? (
        <Item
          src={portion.src}
          showDelete={this.state.showDelete}
          size={portion.size}
          type={portion.type}
          id={portion.id}
          key={portion.id}
        />
      ) : (
          ""
        );
    });

    const grains = this.state.newPortions.map(portion => {
      return portion.type === "grains" ? (
        <Item
          src={portion.src}
          showDelete={this.state.showDelete}
          size={portion.size}
          type={portion.type}
          id={portion.id}
          key={portion.id}
        />
      ) : (
          ""
        );
    });

    const protein = this.state.newPortions.map(portion => {
      return portion.type === "protein" ? (
        <Item
          src={portion.src}
          showDelete={this.state.showDelete}
          size={portion.size}
          type={portion.type}
          id={portion.id}
          key={portion.id}
        />
      ) : (
          ""
        );
    });

    const dairy = this.state.newPortions.map(portion => {
      return portion.type === "dairy" ? (
        <Item
          src={portion.src}
          showDelete={this.state.showDelete}
          size={portion.size}
          type={portion.type}
          id={portion.id}
          key={portion.id}
        />
      ) : (
          ""
        );
    });

    const targets = this.state.meals.map((meal, index) => {
      return (
        <Target
          portions={this.state.meals[index].portions}
          meal={this.state.meals[index].meal}
          showDelete={this.state.showDelete}
          key={meal.meal}
          handleDrop={(item, meal) => this.moveItem(item, meal)}
          handleClick={(item, meal) => {
            this.moveBack(item, meal);
          }}
        />
      );
    });

    return (
      <div>
        <Wrapper className="gridWrapper">
          <Navbar />
          <Container>
            <div className="grid-nav">
              <Row>
                <Col size="md-5"><span className="grid-nav-child">Meal Plan: </span>{this.state.plan} kcal</Col>
                <Col size="md-1"><span className="grid-nav-child">TARGET:</span></Col>
                <Col size="md-6">Drag and drop your portions to plan your meals!</Col>
              </Row>
            </div>
            <Row>
              <Col size="md-5">{targets}</Col>
              <Col size="md-1">
                <Counter portionDailyTarget={this.state.portions} />
              </Col>
              <Col size="md-6">
                <div className="portion-title">fruit</div>
                {fruit}
                <br style={{ "clear": "both" }} />
                <div className="portion-title">vegetable</div>
                {vegetables}
                <br style={{ "clear": "both" }} />
                <div className="portion-title">grains</div>
                {grains}
                <br style={{ "clear": "both" }} />
                <div className="portion-title">protein</div>
                {protein}
                <br style={{ "clear": "both" }} />
                <div className="portion-title">dairy</div>
                {dairy}
                <br style={{ "clear": "both" }} />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <button className="grid-clear" onClick={() => this.setInitialState()}> CLEAR </button>
              </Col>
              <Preview generator={this.generatePreview} />
            </Row>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(Grid);