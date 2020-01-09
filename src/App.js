import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Users from "./components/users";
import User from "./components/userId";
import UserForm from "./components/userForm";
import { connect } from "react-redux";
import { getUsers } from "./actions/index";
import "./App.css";
import NotFound from "./components/NotFound";

class App extends Component {
  componentDidMount() {
    console.log("component did mount");
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/home/userform" component={UserForm} />
        <Route path="/userform/user/:id" exact component={User} />
        <Route path="/not-found" component={NotFound} />
      </div>
    );
  }
}

export default connect(null, { getUsers })(App);
