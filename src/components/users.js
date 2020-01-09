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

  getBack() {
    this.props.history.push("/home");
  }

  render() {
    return (
      <div>
        <main className="container">
          <h1 className="text-primary m-3">
            <u>Welcome to User's reopository</u>
          </h1>
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
          <button className="btn btn-primary" onClick={() => this.getBack()}>
            Go Back
          </button>
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
