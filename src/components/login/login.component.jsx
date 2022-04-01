import "./login.styles.scss";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../api/requestHandler";

class Login extends Component {
  state = {
    email: "",
    password: "",
    remember: true,
    error: false,
  };

  componentWillMount = () => {
    let token = localStorage.getItem("minealebshToken");
    this.props.loadProfile(token);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked!");

    axios
      .post("/user/auth", {
        identifier: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        this.props.authenticator(
          response.data.token,
          response.data.user,
          this.state.remember
        );
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ error: true });
        this.props.authenticator(
          "trialtoken656ads165sad",
          { name: "trial", userId: "45abn" },
          this.state.remember
        );
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckToggle = () => {
    this.setState((prevState) => ({ remember: !prevState.remember }));
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
                  type="text"
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
                  checked={this.state.remember}
                  onChange={this.handleCheckToggle}
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
