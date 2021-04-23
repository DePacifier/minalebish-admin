import "./login.styles.scss";

import React, { Component } from "react";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <div className="grid-container">
        <div className="item sign-in">
          <div className="content">
            <h2 className="signin-title">Sign In</h2>
            <form method="" action="">
              <label htmlFor="email">Email Address</label>
              <input
                className="inputs"
                name="email"
                type="email"
                placeholder=""
                required
                autoFocus
                autoComplete="true"
              />
              <label htmlFor="password">Password</label>
              <input
                className="inputs"
                name="password"
                type="password"
                placeholder=""
                required
              />
              <input
                className="checkbox"
                type="checkbox"
                name="remember"
                value="remember me"
              />
              <label className="checkbox" htmlFor="remember">
                remember me
              </label>
              <input className="signin-button" type="submit" value="Sign In" />
            </form>
          </div>
        </div>
        <div className="item side-info">
          <div className="content">
            <h1>Welcome to</h1>
            <h1>Minalebish Admin</h1>
          </div>
        </div>
      </div>
    );
  }
}
