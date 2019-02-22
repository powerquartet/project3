import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Form from "./pages/Form";
import Grid from "./pages/Grid";
import Home from "./pages/Home";
import Portion from "./pages/Portion";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Toggle from './components/Toggle';

function App() {
  return (
    <Router>
        <Wrapper>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/portion" component={Portion} />
          <Route exact path="/grid" component={Grid} />
          <Navbar />
        </Wrapper>
    </Router>
  );
}

export default App;
