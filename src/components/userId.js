import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  state = {};

  getUserData() {
    const { id } = this.props.match.params;
    const userId = parseInt(id);
    console.log("user id is : ", userId);
    const user = this.props.users.filter(user => user.id === userId);
    console.log(user);
    return user;
  }

  render() {
    const user = this.getUserData();
    return (
      <div>
        <h1>Details of the user : {this.props.match.params.id}</h1>
        <ul>
          {user.map(item => (
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.username}</li>
              <li>{item.email}</li>
              <li>{item.phone}</li>
            </ul>
          ))}
        </ul>
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
export default connect(mapStateToProps)(User);
