import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import UserList from "../../components/user-list/user-list.component";
import UserCreate from "../../components/user-create/user-create.component";

import "./user.styles.scss";

export default class UserPage extends Component {
  state = { showList: this.props.showList, miniVersion: false };

  handleChangeView = () => {
    this.setState((prevState) => ({
      miniVersion: !prevState.miniVersion,
    }));
  };

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
        className={`user-grid-container ${
          this.state.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation showLabels={!this.state.miniVersion} />
        </div>
        <div className="grid-item header">
          <div className="change-view-button" onClick={this.handleChangeView}>
            <span class="material-icons-outlined customBurg">menu</span>
          </div>
          <div className="page-title">User</div>
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
                  onClick={this.handleShowProfile}
                  className={`option ${this.state.showProfile ? "active" : ""}`}
                >
                  Profile
                </Link>
                <Link
                  onClick={this.handleShowChangePassword}
                  className={`option ${this.state.showProfile ? "" : "active"}`}
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
              <li className="link-item active">
                <a href="" onClick={this.handleShowList}>
                  List
                </a>
              </li>
              <li className="link-item">
                <a href="" onClick={this.handleShowCreate}>
                  Create
                </a>
              </li>
            </ul>
          </div>
          <div className="content-container">
            {this.state.showList ? <UserList /> : <UserCreate />}
          </div>
        </div>
      </div>
    );
  }
}
