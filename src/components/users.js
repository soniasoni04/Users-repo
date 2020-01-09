import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  state = {};

  getUsersDetails() {
    return this.props.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to User's reopository</h1>
        <br />
        <main className="container">
          <table className="table">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>{this.getUsersDetails()}</tbody>
          </table>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state from mapStateTo props : ", state.users);

  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Users);
