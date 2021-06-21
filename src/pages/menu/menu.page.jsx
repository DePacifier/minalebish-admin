import "./menu.styles.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import MenuCreate from "../../components/menu-create/menu-create.component";
import MenuList from "../../components/menu-components/menu-list/menu-list.component";
import CategoryCreate from "../../components/menu-components/category-create/category-create.component";
import CategoryList from "../../components/menu-components/category-list/category-list.component";

class Menu extends Component {
  state = {
    showMenu: true,
    showList: true,
    miniVersion: false,
  };

  handleChangeView = () => {
    this.setState((prevState) => ({
      miniVersion: !prevState.miniVersion,
    }));
  };

  showMenu = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: true,
      showList: true,
    });
  };

  showCategory = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: false,
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
        className={`menu-grid-container ${
          this.state.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation showLabels={!this.state.miniVersion} activeTab="menu" />
        </div>
        <div className="grid-item header">
          <div className="change-view-button" onClick={this.handleChangeView}>
            <span className="material-icons-outlined customBurg">menu</span>
          </div>
          <div className="header-link-container">
            <ul className="links-list">
              <li className="link-item">
                <a
                  className={`${this.state.showMenu ? "active" : ""}`}
                  href=""
                  onClick={this.showMenu}
                >
                  Menu
                </a>
              </li>
              <li className="link-item">
                <a
                  className={`${this.state.showMenu ? "" : "active"}`}
                  href=""
                  onClick={this.showCategory}
                >
                  Category
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
          {this.state.showMenu ? (
            this.state.showList ? (
              <MenuList />
            ) : (
              <MenuCreate />
            )
          ) : this.state.showList ? (
            <CategoryList />
          ) : (
            <CategoryCreate />
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
