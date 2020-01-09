import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserForm extends Component {
  state = {
    userId: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("userid: ", this.state.userId);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("userid from submit block: ", this.state.userId);
    if (this.state.userId > 11) {
      return this.props.history.push("/not-found");
    }
    const url = "/userform/user/" + this.state.userId;
    console.log("url:", url);
    this.props.history.push(url);
  };
  render() {
    return (
      <div>
        <p>Give User-ID to get full details of the user</p>
        <form onSubmit={this.onSubmit}>
          <label>User ID</label>
          <input
            type="number"
            name="userId"
            value={this.state.userId}
            onChange={this.onChange}
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UserForm;
