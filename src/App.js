import "./App.css";
import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "./components/login/login.component";
import ForgotPassword from "./pages/forgot-password/forgot-pasword.page";
import PasswordReset from "./components/password-reset/password-reset.component";
import PasswordChanged from "./components/password-changed/password-changed.component";
import LogPage from "./pages/log/log.page";
import ReportPage from "./pages/report/report.page";
import NotificationPage from "./pages/notification/notification.page";
import UserPage from "./pages/user/user.page";
import Profile from "./pages/profile/profile.page";
import Dashboard from "./pages/dashboard/dashboard.page";
import Transaction from "./pages/transaction/transaction.page";
import Menu from "./pages/menu/menu.page";
import Customer from "./pages/customer/customer.page";

import axios from "./api/requestHandler";

class App extends Component {
  state = {
    miniVersion: false,
    authenticated: false,
    token: null,
    user: null,
  };

  //
  handleChangeView = () => {
    this.setState((prevState) => ({
      miniVersion: !prevState.miniVersion,
    }));
  };

  //
  handleGetProfile = (token) => {
    this.setState({ token: token }, () => {
      if (this.state.token !== null) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        axios
          .get("/user/profile")
          .then((response) => {
            this.setState({ user: response.data, authenticated: true }, () => {
              this.props.history.push("/123/dashboard");
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  //
  handleAuthentication = (tokenData, userData, remember) => {
    this.setState(
      { token: tokenData, user: userData, authenticated: true },
      () => {
        if (remember) {
          localStorage.setItem("minealebshToken", tokenData);
        }
        this.props.history.push("/123/dashboard");
      }
    );
  };

  //
  handleLogOut = (event) => {
    event.preventDefault();
    axios
      .post("/user/logout")
      .then((response) => {
        axios.defaults.headers.common["Authorization"] = null;

        this.setState({ token: null, user: null, authenticated: false }, () => {
          localStorage.removeItem("minealebshToken");
          this.props.history.push("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Login
                {...props}
                authenticator={this.handleAuthentication}
                loadProfile={this.handleGetProfile}
              />
            )}
          />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password" component={PasswordReset} />
          <Route
            exact
            path="/password-changed"
            render={(props) => (
              <PasswordChanged {...props} handleLogOut={this.handleLogOut} />
            )}
          />
          <Route
            exact
            path="/:userid/Logs"
            render={(props) =>
              this.state.authenticated ? (
                <LogPage
                  {...props}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/Report"
            render={(props) =>
              this.state.authenticated ? (
                <ReportPage
                  {...props}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/Notifications"
            render={(props) =>
              this.state.authenticated ? (
                <NotificationPage
                  {...props}
                  showList={true}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/Customers"
            render={(props) =>
              this.state.authenticated ? (
                <Customer
                  {...props}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/User"
            render={(props) =>
              this.state.authenticated ? (
                <UserPage
                  {...props}
                  showList={true}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/Profile"
            render={(props) =>
              this.state.authenticated ? (
                <Profile
                  {...props}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                  userData={this.state.user}
                  axios={axios}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/Dashboard"
            render={(props) =>
              this.state.authenticated ? (
                <Dashboard
                  {...props}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                  handleLogOut={this.handleLogOut}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/Transaction"
            render={(props) =>
              this.state.authenticated ? (
                <Transaction
                  {...props}
                  showList={true}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/:userid/Menu"
            render={(props) =>
              this.state.authenticated ? (
                <Menu
                  {...props}
                  miniVersion={this.state.miniVersion}
                  handleChangeView={this.handleChangeView}
                  axios={axios}
                />
              ) : (
                <Redirect to="/AuthError" />
              )
            }
          />
          <Route
            exact
            path="/AuthError"
            render={() => <h1>Not Authenication for access</h1>}
          />
          <Route path="*" render={() => <h1>Page Not Found !!!</h1>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
