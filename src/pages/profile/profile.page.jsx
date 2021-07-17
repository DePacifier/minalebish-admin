import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import UserProfile from "../../components/user-profile/user-profile.component";
import ChangePassword from "../../components/change-password/change-password.component";

import "./profile.styles.scss";

export default class Profile extends Component {
  state = { showProfile: this.props.showProfile };

  handleShowProfile = () => {
    if (this.state.showProfile) return;
    else {
      this.setState({
        showProfile: true,
      });
    }
  };

  handleShowChangePassword = () => {
    if (!this.state.showProfile) return;
    else {
      this.setState({
        showProfile: false,
      });
    }
  };

  render() {
    return (
      <div
        className={`profile-grid-container ${
          this.props.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation showLabels={!this.props.miniVersion} />
        </div>
        <div className="grid-item header">
          <div
            className="change-view-button"
            onClick={this.props.handleChangeView}
          >
            <span className="material-icons-outlined customBurg">menu</span>
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
          {this.state.showProfile ? (
            <UserProfile {...this.props.userData} />
          ) : (
            <ChangePassword axios={this.props.axios} />
          )}
        </div>
      </div>
    );
  }
}
