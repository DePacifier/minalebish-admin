import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import TableDisplay from "../../components/table-display/table-display.component";

import "./log.styles.scss";

export default class LogPage extends Component {
  state = { showProfile: this.props.showProfile, miniVersion: false };

  handleChangeView = () => {
    this.setState((prevState) => ({
      miniVersion: !prevState.miniVersion,
    }));
  };

  render() {
    return (
      <div
        className={`log-grid-container ${
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
          <div className="page-title">Logs</div>
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
          <h1 className="title">Log</h1>
          <h2 className="subtitle">List</h2>
          <form className="form-class">
            <div className="input-group">
              <input
                className="field-input"
                type="text"
                placeholder="Search by fields"
              />
              <label>Date</label>
              <input
                className="date-input"
                type="date"
                placeholder="3-27-2021"
              />
              <span class="divider"> - </span>
              <input
                className="date-input"
                type="date"
                placeholder="3-27-2021"
              />
            </div>
            <input className="filter-button" type="submit" value="Filter" />
          </form>
          <TableDisplay />
        </div>
      </div>
    );
  }
}
