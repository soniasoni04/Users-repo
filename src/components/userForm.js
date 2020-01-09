import React, { Component } from "react";

class UserForm extends Component {
  state = {
    userId: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.userId > 11 || this.state.userId < 1) {
      return this.props.history.push("/not-found");
    }
    const url = "/userform/user/" + this.state.userId;
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
