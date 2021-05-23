import "./login.styles.scss";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked!");
    this.props.history.push("/123/Dashboard");
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleForgotPassword = () => {
    this.props.history.push("/forgot-password");
  };

  render() {
    return (
      <div className="container">
        <div className="login-grid-container">
          <div className="item sign-in">
            <div className="content">
              <h2 className="signin-title">Sign-In</h2>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                  className="inputs"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                  autoFocus
                  autoComplete="true"
                />
                <label htmlFor="password">Password</label>
                <input
                  className="inputs"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                  autoComplete="true"
                />
                <input
                  className="checkbox"
                  type="checkbox"
                  name="remember"
                  value="remember me"
                />
                <label className="checkbox" htmlFor="remember">
                  Remember Me
                </label>
                <span className="forgot" onClick={this.handleForgotPassword}>
                  Forgot Password ?
                </span>
                <input
                  className="signin-button"
                  type="submit"
                  value="Sign In"
                />
              </form>
            </div>
          </div>
          <div className="item side-info">
            <div className="content">
              <h1>
                Welcome to
                <br />
                Minalesh Tera
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
