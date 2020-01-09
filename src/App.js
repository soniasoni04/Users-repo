import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/home" exact component={Home} />
      </div>
    );
  }
}

export default App;
