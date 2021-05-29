import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import ClientAndTransaction from "../../components/report-components/clientAndTransaction/clientAndTransaction.component";

import "./report.styles.scss";

const inactiveLinks = {
  link1: false,
  link2: false,
  link3: false,
  link4: false,
  link5: false,
};

export default class ReportPage extends Component {
  state = {
    link1: true,
    link2: false,
    link3: false,
    link4: false,
    link5: false,
    miniVersion: false,
  };

  handleLinkClick = (event, linkId) => {
    event.preventDefault();

    this.setState({ ...inactiveLinks, [linkId]: true });
  };

  handleChangeView = () => {
    this.setState((prevState) => ({
      miniVersion: !prevState.miniVersion,
    }));
  };

  render() {
    return (
      <div
        className={`report-grid-container ${
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
              <li className={`link-item ${this.state.link1 ? "active" : ""}`}>
                <a
                  href=""
                  onClick={(event) => this.handleLinkClick(event, "link1")}
                >
                  Client
                </a>
              </li>
              <li className={`link-item ${this.state.link2 ? "active" : ""}`}>
                <a
                  href=""
                  onClick={(event) => this.handleLinkClick(event, "link2")}
                >
                  Client To Transaction
                </a>
              </li>
              <li className={`link-item ${this.state.link3 ? "active" : ""}`}>
                <a
                  href=""
                  onClick={(event) => this.handleLinkClick(event, "link3")}
                >
                  Location To Client
                </a>
              </li>
              <li className={`link-item ${this.state.link4 ? "active" : ""}`}>
                <a
                  href=""
                  onClick={(event) => this.handleLinkClick(event, "link4")}
                >
                  Location To Transaction
                </a>
              </li>
              <li className={`link-item ${this.state.link5 ? "active" : ""}`}>
                <a
                  href=""
                  onClick={(event) => this.handleLinkClick(event, "link5")}
                >
                  Transaction
                </a>
              </li>
              <li className={`link-item ${this.state.link6 ? "active" : ""}`}>
                <a
                  href=""
                  onClick={(event) => this.handleLinkClick(event, "link6")}
                >
                  Purchased Item
                </a>
              </li>
            </ul>
          </div>
          {this.state.link1 ? <ClientAndTransaction transaction={false} /> : ""}
          {this.state.link2 ? <ClientAndTransaction transaction={true} /> : ""}
          {this.state.link3 ? <ClientAndTransaction transaction={false} /> : ""}
          {this.state.link4 ? <ClientAndTransaction transaction={false} /> : ""}
          {this.state.link5 ? <ClientAndTransaction transaction={false} /> : ""}
          {this.state.link6 ? <ClientAndTransaction transaction={false} /> : ""}
        </div>
      </div>
    );
  }
}
