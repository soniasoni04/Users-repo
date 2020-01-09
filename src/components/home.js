import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const users = ["Users Details", "Get User Full Details"];
    return (
      <div>
        <h1>Welcome to User's reopository</h1>
        <br />
        <ul>
          <li>
            <Link to="/users">Users Details</Link>
          </li>
          <li>
            <Link to="/home/userform">Get User Full Details</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
