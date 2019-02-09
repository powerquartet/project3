import React, { Component } from 'react';
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