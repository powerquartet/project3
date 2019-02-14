import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './pages/Form';
// import Grid from './pages/Grid';
import Home from './pages/Home';
import Portion from './pages/Portion';
// import Toggle from './components/Toggle';

function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/portion" component={Portion} />
        {/* <Route exact path="/grid" component={Grid} /> */}

      </div>
    </Router>
  );
}

export default App;
