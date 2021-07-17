import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import "./change-password.styles.scss";

class ChangePassword extends Component {
  state = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    passMismatchError: false,
    error: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.newPassword === this.state.confirmPassword &&
      this.state.oldPassword !== ""
    ) {
      this.setState({ passMismatchError: false, error: false });
      this.props.axios
        .patch("/user/change-password", {
          old_password: this.state.oldPassword,
          new_password: this.state.newPassword,
        })
        .then((response) => {
          console.log(response, "password changed successfully");
          this.props.history.push("/password-changed");
        })
        .catch((error) => {
          console.log(error);
          this.setState({ error: true });
        });
    } else {
      this.setState({ passMismatchError: true });
    }
  };

  render() {
    return (
      <>
        <h1 className="title">User</h1>
        <h2 className="subtitle">Change Password</h2>
        <div className="change-pass-main-flex-dash-container">
          <div className="change-pass-container">
            <form onSubmit={this.handleSubmit}>
              <label className="form-title">Password Change</label>
              <label className="form-subtitle">
                User login password change
              </label>
              <input
                className="inputs"
                type="password"
                name="oldPassword"
                placeholder="Old password"
                value={this.state.oldPassword}
                onChange={this.handleChange}
              />
              <input
                className="inputs"
                type="password"
                name="newPassword"
                placeholder="New password"
                value={this.state.newPassword}
                onChange={this.handleChange}
              />
              <input
                className="inputs"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
              />
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ChangePassword);
