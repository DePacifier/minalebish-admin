import React, { Component } from "react";

import "./user-create.styles.scss";

export default class UserCreate extends Component {
  state = { firstName: "", middleName: "", lastName: "", email: "", phone: "" };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="user-create-container">
        <div className="absolute-page-title">
          <h1 className="title">User</h1>
          <h2 className="subtitle">Create</h2>
        </div>
        <form>
          <div className="create-user-form-group">
            <h2>Info</h2>
            <h3>Basic user information</h3>
            <div className="horizontal-flex-container">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                name="middleName"
                placeholder="Middle Name"
                value={this.state.middleName}
                onChange={this.handleInputChange}
              />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="create-user-form-group">
            <h2>Contact</h2>
            <h3>Basic user contact information</h3>
            <div className="horizontal-flex-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
              <input
                type="tel"
                pattern="+251-[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                name="phone"
                placeholder="Phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="create-user-form-group">
            <h2>Role</h2>
            <h3>Control role of user</h3>
            <select name="role">
              <option value="role1">role1</option>
              <option value="role2">role2</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
