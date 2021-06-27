import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import TableDisplay from "../../components/table-display/table-display.component";

import "./log.styles.scss";

export default class LogPage extends Component {
  state = {
    showFilter: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      showFilter: !prevState.showFilter,
    }));
  };

  handleTypeToDate = (event) => {
    event.target.type = "date";
  };

  handleTypeToText = (event) => {
    event.target.type = "text";
  };

  render() {
    return (
      <div
        className={`log-grid-container ${
          this.props.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation showLabels={!this.props.miniVersion} activeTab="logs" />
        </div>
        <div className="grid-item header">
          <div
            className="change-view-button"
            onClick={this.props.handleChangeView}
          >
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
          <h1 className="title">Log</h1>
          <h2 className="subtitle">List</h2>
          <div className="scrollable">
            <form className="form-class" onSubmit={this.handleFormSubmit}>
              <div className="input-group">
                <input
                  className="field-input"
                  type="text"
                  placeholder="Search by fields"
                />
                {this.state.showFilter ? (
                  <>
                    <label>Date</label>
                    <input
                      className="date-input"
                      type="text"
                      onFocus={this.handleTypeToDate}
                      onBlur={this.handleTypeToText}
                      placeholder="2021-3-27"
                    />
                    <span class="divider"> - </span>
                    <input
                      className="date-input"
                      type="text"
                      onFocus={this.handleTypeToDate}
                      onBlur={this.handleTypeToText}
                      placeholder="2021-3-27"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <input
                className={`filter-button ${
                  this.state.showFilter ? "clicked" : ""
                }`}
                type="submit"
                value="Filter"
              />
            </form>
            <div className="table-part">
              <TableDisplay
                tableData={[
                  [
                    "Login Time",
                    "Log-out Time",
                    "User Id",
                    "Name",
                    "Email",
                    "Phone Number",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                  [
                    "29 ,Apr 2021 09:00 ",
                    "29 ,Apr 2021 09:00 ",
                    "2854",
                    "Louisa Ramirez",
                    "jeremy.lucas@mail.com",
                    "(149)525-7243",
                  ],
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
