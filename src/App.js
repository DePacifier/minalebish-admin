import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/login.component";
import ForgotPassword from "./pages/forgot-password/forgot-pasword.page";
import PasswordReset from "./components/password-reset/password-reset.component";
import LogPage from "./pages/log/log.page";
import ReportPage from "./pages/report/report.page";
import NotificationPage from "./pages/notification/notification.page";
import UserPage from "./pages/user/user.page";
import Profile from "./pages/profile/profile.page";
import Dashboard from "./pages/dashboard/dashboard.page";
import Transaction from "./pages/transaction/transaction.page";
import Menu from "./pages/menu/menu.page";
import Customer from "./pages/customer/customer.page";

export default class App extends Component {
  state = { miniVersion: false };

  handleChangeView = () => {
    this.setState((prevState) => ({
      miniVersion: !prevState.miniVersion,
    }));
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset-password" component={PasswordReset} />
          <Route
            exact
            path="/:userid/Logs"
            render={(props) => (
              <LogPage
                {...props}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/Report"
            render={(props) => (
              <ReportPage
                {...props}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/Notifications"
            render={(props) => (
              <NotificationPage
                {...props}
                showList={true}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/Customers"
            render={(props) => (
              <Customer
                {...props}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/User"
            render={(props) => (
              <UserPage
                {...props}
                showList={true}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/Profile"
            render={(props) => (
              <Profile
                {...props}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/Dashboard"
            render={(props) => (
              <Dashboard
                {...props}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/Transaction"
            render={(props) => (
              <Transaction
                {...props}
                showList={true}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route
            exact
            path="/:userid/Menu"
            render={(props) => (
              <Menu
                {...props}
                miniVersion={this.state.miniVersion}
                handleChangeView={this.handleChangeView}
              />
            )}
          />
          <Route path="*" render={() => <h1>Page Not Found !!!</h1>} />
        </Switch>
      </div>
    );
  }
}
