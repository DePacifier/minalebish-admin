import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./forgot-password.styles.scss";

class ForgotPassword extends Component {
  state = { email: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="forgot-password-container">
        <div className="forgot-container">
          <h1>Forgot Password</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="email-container">
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                autoFocus
                required
              />
            </div>
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ForgotPassword);
