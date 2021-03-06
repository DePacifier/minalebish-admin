import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import ClientAndTransaction from "../../components/report-components/clientAndTransaction/clientAndTransaction.component";
import LocationAndTransaction from "../../components/report-components/locationAndTransaction/locationAndTransaction.component";
import PurchasedAndTransaction from "../../components/report-components/purchasedAndTransaction/purchasedAndTransaction.component";
import UserTableToggle from "../../components/user-components/user-table-toggle/user-table-toggle.component";

import "./report.styles.scss";

const inactiveLinks = {
  link1: false,
  link2: false,
  link3: false,
  link4: false,
  link5: false,
  link6: false,
};

export default class ReportPage extends Component {
  state = {
    link1: true,
    link2: false,
    link3: false,
    link4: false,
    link5: false,
    link6: false,
  };

  handleLinkClick = (event, linkId) => {
    event.preventDefault();

    this.setState({ ...inactiveLinks, [linkId]: true });
  };

  render() {
    return (
      <div
        className={`report-grid-container ${
          this.props.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation showLabels={!this.props.miniVersion} activeTab="report" />
        </div>
        <div className="grid-item header">
          <div
            className="change-view-button"
            onClick={this.props.handleChangeView}
          >
            <span className="material-icons-outlined customBurg">menu</span>
          </div>
          <div className="page-title">Reports</div>
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
          {this.state.link3 ? (
            <LocationAndTransaction transaction={false} />
          ) : (
            ""
          )}
          {this.state.link4 ? (
            <LocationAndTransaction transaction={true} />
          ) : (
            ""
          )}
          {this.state.link5 ? (
            <PurchasedAndTransaction transaction={true} />
          ) : (
            ""
          )}
          {this.state.link6 ? (
            <PurchasedAndTransaction transaction={false} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
