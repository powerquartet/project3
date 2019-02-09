import React, { Component } from 'react';
// import HTML5Backend from 'react-dnd-html5-backend';
// import { DragDropContext } from 'react-dnd';
import Form from './pages/Form';
import Grid from './pages/Grid';
import Home from './pages/Home';
import Portion from './pages/Portion';

class App extends Component {

  render() {
    return (
      <div>
        <Form />
        <Grid />
        <Home />
        <Portion />
      </div>
    );
  }
}

export default App;