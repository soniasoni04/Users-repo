import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../components/actions/index";

class Home extends Component {
  state = {};

  componentDidMount() {
    console.log("component did mount");
    this.props.getUsers();
  }
  render() {
    return (
      <div>
        <h1>Welcome to User's reopository</h1>
        
      </div>
    );
  }
}

export default connect(null, { getUsers })(Home);
