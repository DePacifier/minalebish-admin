import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import NotificationCreate from "../../components/notification-create/notification-create.component";
import TableDisplay from "../../components/table-display/table-display.component";

import "./notification.styles.scss";

export default class NotificationPage extends Component {
  state = {
    showList: this.props.showList,
    miniVersion: false,
    createStatus: 0,
    title: "",
    body: "",
    contact: "",
  };

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

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleNext = (event) => {
    event.preventDefault();

    this.setState({ createStatus: 1 });
  };

  render() {
    const ListAndCreate = (
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
          {this.state.showList ? (
            "<NotificationList />"
          ) : (
            <NotificationCreate
              titleData={this.state.title}
              bodyData={this.state.body}
              contactData={this.state.contact}
              changeHandler={this.handleChange}
              nextHandler={this.handleNext}
            />
          )}
        </div>
      </div>
    );

    const createNext = (
      <div className="grid-item main">
        <form className="create-next-page-form">
          <div className="create-next-page">
            <div className="checkbox-group">
              <input
                className="checkbox"
                type="radio"
                name="filter"
                value="all"
              />
              <label className="checkbox-label">All</label>
            </div>
            <div className="checkbox-group">
              <input
                className="checkbox"
                type="radio"
                name="filter"
                value="age-group"
              />
              <label className="checkbox-label">By Age Group</label>
              <div className="content">
                <h3>Age</h3>
                <input className="age-input" type="number" placeholder="min" />
                <span>-</span>
                <input className="age-input" type="number" placeholder="max" />
              </div>
            </div>
            <div className="checkbox-group">
              <input
                className="checkbox"
                type="radio"
                name="filter"
                value="location"
              />
              <label className="checkbox-label">By Location</label>
              <div className="content">
                <div className="custom-select">
                  <select>
                    <option value="email">Country</option>
                    <option value="phone">Phone</option>
                    <option value="both">Both</option>
                  </select>
                  <span class="material-icons custom-arrow">
                    arrow_drop_down
                  </span>
                </div>
                <div className="custom-select">
                  <select>
                    <option value="email">State</option>
                    <option value="phone">Phone</option>
                    <option value="both">Both</option>
                  </select>
                  <span class="material-icons custom-arrow">
                    arrow_drop_down
                  </span>
                  <span class="optional">optional</span>
                </div>
                <div className="custom-select">
                  <select>
                    <option value="email">City</option>
                    <option value="phone">Phone</option>
                    <option value="both">Both</option>
                  </select>
                  <span class="material-icons custom-arrow">
                    arrow_drop_down
                  </span>
                  <span class="optional">optional</span>
                </div>
                <div className="custom-select">
                  <input type="number" placeholder="Zip Code" />
                  <span class="optional">optional</span>
                </div>
              </div>
            </div>
            <div className="checkbox-group">
              <input
                className="checkbox"
                type="radio"
                name="filter"
                value="grade"
              />
              <label className="checkbox-label">By Grade</label>
              <div className="content">
                <div className="grade-container">
                  <div className="input-holder">
                    <input type="radio" name="grade" value="gold" />
                    <label>Gold</label>
                  </div>
                  <div className="image-holder">image</div>
                </div>
                <div className="grade-container">
                  <div className="input-holder">
                    <input type="radio" name="grade" value="platinum" />
                    <label>Platinum</label>
                  </div>
                  <div className="image-holder">image</div>
                </div>
                <div className="grade-container">
                  <div className="input-holder">
                    <input type="radio" name="grade" value="silver" />
                    <label>Silver</label>
                  </div>
                  <div className="image-holder">image</div>
                </div>
              </div>
            </div>
            <div className="checkbox-group">
              <input
                className="checkbox"
                type="radio"
                name="filter"
                value="user"
              />
              <label className="checkbox-label">Select User</label>
              <div className="content">
                <div className="input-group">
                  <input type="text" placeholder="Search by name" />
                  <label>Date</label>
                  <input className="user-select-date" type="date" />
                  <span>-</span>
                  <input className="user-select-date" type="date" />
                  <div className="custom-select">
                    <select>
                      <option value="email">Grading</option>
                      <option value="phone">Phone</option>
                      <option value="both">Both</option>
                    </select>
                    <span class="material-icons custom-arrow">
                      arrow_drop_down
                    </span>
                  </div>
                </div>
                <input className="filter-button" type="button" value="Filter" />
              </div>
            </div>

            <TableDisplay />
          </div>
          <div className="buttons">
            <input className="button back-button" type="button" value="Back" />
            <input
              className="button submit-button"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );

    return (
      <div
        className={`notification-grid-container ${
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
          <div className="page-title">Notifications</div>
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
        {this.state.createStatus > 0 ? createNext : ListAndCreate}
      </div>
    );
  }
}
