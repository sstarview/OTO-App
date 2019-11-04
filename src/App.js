import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
