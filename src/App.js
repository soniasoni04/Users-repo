import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Users from "./components/users";
import User from "./components/userId";
import { connect } from "react-redux";
import { getUsers } from "./actions/index";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("component did mount");
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <Route path="/home" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:id" exact component={User} />
      </div>
    );
  }
}

export default connect(null, { getUsers })(App);
