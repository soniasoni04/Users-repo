import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  getUserData() {
    const { id } = this.props.match.params;
    const userId = parseInt(id);
    const user = this.props.users.filter(user => user.id === userId);
    return user;
  }

  getBack() {
    this.props.history.push("/home");
  }

  render() {
    const user = this.getUserData();
    return (
      <div>
        <h3>Details of the user # {this.props.match.params.id}</h3>
        <br></br>
        <main className="container">
          {user.map(user => {
            return (
              <table
                key={user.userId + 1}
                className="table border table-active"
              >
                <tbody>
                  <tr>
                    <th scope="row">User ID :</th>
                    <td>{user.id}</td>
                  </tr>
                  <tr>
                    <th scope="row">Name :</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">UserName :</th>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email :</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone :</th>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Website :</th>
                    <td>{user.website}</td>
                  </tr>
                  <tr>
                    <th scope="row" rowSpan="4">
                      Address :
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <b>Street : </b>
                      {user.address.street}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>City : </b>
                      {user.address.city}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Zipcode : </b>
                      {user.address.zipcode}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" rowSpan="4">
                      Company :
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <b>Name : </b> {user.company.name}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>CatchPhrase : </b> {user.company.catchPhrase}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>BS : </b> {user.company.bs}
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
          <button
            className="btn btn-primary col-2"
            onClick={() => this.getBack()}
          >
            Go Back
          </button>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(User);
