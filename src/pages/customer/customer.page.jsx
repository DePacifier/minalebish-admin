import "./customer.styles.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import CustomerList from "../../components/customer-components/customer-list/customer-list.component";
import GradingList from "../../components/customer-components/grading-list/grading-list.component";
import GradingCreate from "../../components/customer-components/grading-create/grading-create.component";
import CustomerCreate from "../../components/customer-components/customer-create/customer-create.component";

class Customer extends Component {
  state = {
    showCustomer: true,
    showList: true,
    miniVersion: false,
  };

  handleChangeView = () => {
    this.setState((prevState) => ({
      miniVersion: !prevState.miniVersion,
    }));
  };

  showCustomer = (event) => {
    event.preventDefault();
    this.setState({
      showCustomer: true,
      showList: true,
    });
  };

  showGrading = (event) => {
    event.preventDefault();
    this.setState({
      showCustomer: false,
      showList: true,
    });
  };

  showList = (event) => {
    event.preventDefault();
    this.setState({
      showList: true,
    });
  };

  showCreate = (event) => {
    event.preventDefault();
    this.setState({
      showList: false,
    });
  };

  render() {
    return (
      <div
        className={`customer-grid-container ${
          this.state.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation
            showLabels={!this.state.miniVersion}
            activeTab="customers"
          />
        </div>
        <div className="grid-item header">
          <div className="change-view-button" onClick={this.handleChangeView}>
            <span className="material-icons-outlined customBurg">menu</span>
          </div>
          <div className="header-link-container">
            <ul className="links-list">
              <li className="link-item">
                <a
                  className={`${this.state.showCustomer ? "active" : ""}`}
                  href=""
                  onClick={this.showCustomer}
                >
                  Customer
                </a>
              </li>
              <li className="link-item">
                <a
                  className={`${this.state.showCustomer ? "" : "active"}`}
                  href=""
                  onClick={this.showGrading}
                >
                  Grading
                </a>
              </li>
            </ul>
          </div>
          <div className="identity-container">
            <div className="image">JD</div>
            <div className="details">
              <h1 className="title">Jon Dow</h1>
              <h2 className="subtitle">Admin</h2>
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-icon">
                <span className="material-icons-outlined">arrow_drop_down</span>
              </div>
              <div className="options-list">
                <Link
                  className="option"
                  to={{
                    pathname: "profile",
                    props: { showProfile: true },
                  }}
                >
                  Profile
                </Link>
                <Link
                  className="option"
                  to={{
                    pathname: "profile",
                    props: { showProfile: false },
                  }}
                >
                  Change password
                </Link>
                <Link to="/" className="option">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item main">
          <div className="main-content-links">
            <ul className="links-list">
              <li
                className={`link-item ${this.state.showList ? "active" : ""}`}
              >
                <a href="" onClick={this.showList}>
                  List
                </a>
              </li>
              <li
                className={`link-item ${this.state.showList ? "" : "active"}`}
              >
                <a href="" onClick={this.showCreate}>
                  Create
                </a>
              </li>
            </ul>
          </div>
          {this.state.showCustomer ? (
            this.state.showList ? (
              <CustomerList />
            ) : (
              <CustomerCreate />
            )
          ) : this.state.showList ? (
            <GradingList />
          ) : (
            <GradingCreate />
          )}
        </div>
      </div>
    );
  }
}

export default Customer;
