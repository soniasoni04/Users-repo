import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const users = ["All User Details", "Users Deatils by Id", "Users Address"];
    return (
      <div>
        <h1>Welcome to User's reopository</h1>
        <br />
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <Link to="/Users">{user}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
