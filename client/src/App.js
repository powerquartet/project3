import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Form from './pages/Form';
import Grid from './pages/Grid';
import Home from './pages/Home';
import Portion from './pages/Portion';
import Wrapper from './components/Wrapper'
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Toggle from './components/Toggle';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/portion" component={Portion} />
          <Route exact path="/grid" component={Grid} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
