import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import TransactionList from "../../components/transaction-components/transaction-list-component/transaction-list.component";
import TransactionCreate from "../../components/transaction-components/transaction-create-component/transaction-create.component";

import "./transaction.styles.scss";

export default class UserPage extends Component {
  state = { showList: this.props.showList };

  handleShowList = (event) => {
    event.preventDefault();
    this.setState({
      showList: true,
    });
  };

  handleShowCreate = (event) => {
    event.preventDefault();
    this.setState({
      showList: false,
    });
  };

  render() {
    return (
      <div
        className={`transaction-grid-container ${
          this.props.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation
            showLabels={!this.props.miniVersion}
            activeTab="transaction"
          />
        </div>
        <div className="grid-item header">
          <div
            className="change-view-button"
            onClick={this.props.handleChangeView}
          >
            <span class="material-icons-outlined customBurg">menu</span>
          </div>
          <div className="page-title">Transaction</div>
          <div className="identity-container">
            <div className="image">JD</div>
            <div className="details">
              <h1 className="title">Jon Dow</h1>
              <h2 className="subtitle">Admin</h2>
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-icon">
                <span class="material-icons-outlined">arrow_drop_down</span>
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
                <a href="" onClick={this.handleShowList}>
                  List
                </a>
              </li>
              <li
                className={`link-item ${this.state.showList ? "" : "active"}`}
              >
                <a href="" onClick={this.handleShowCreate}>
                  Create
                </a>
              </li>
            </ul>
          </div>
          {this.state.showList ? <TransactionList /> : <TransactionCreate />}
        </div>
      </div>
    );
  }
}
