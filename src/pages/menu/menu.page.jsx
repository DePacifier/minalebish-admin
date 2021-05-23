import "./menu.styles.scss";
import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation.component";
import TableDisplay from "../../components/table-display/table-display.component";
import MenuCreate from "../../components/menu-create/menu-create.component";

class Menu extends Component {
  state = {
    showMenu: true,
    showList: true,
  };

  showMenu = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: true,
    });
  };

  showCategory = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: false,
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
      <div className="menu-grid-container">
        <div className="grid-item nav">
          <Navigation />
        </div>
        <div className="grid-item header">
          <div className="details">
            <h1 className="title">Jon Dow</h1>
            <h2 className="subtitle">Admin</h2>
          </div>
          <div className="image">JD</div>
          <div className="header-link-container">
            <ul className="links-list">
              <li className="link-item">
                <a className="active" href="" onClick={this.showMenu}>
                  Menu
                </a>
              </li>
              <li className="link-item">
                <a href="" onClick={this.showCategory}>
                  Category
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content-links">
          <ul className="links-list">
            <li className="link-item active">
              <a href="" onClick={this.showList}>
                List
              </a>
            </li>
            <li className="link-item">
              <a href="" onClick={this.showCreate}>
                Create
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-item main">
          {this.state.showMenu ? (
            this.state.showList ? (
              <TableDisplay />
            ) : (
              <MenuCreate />
            )
          ) : this.state.showList ? (
            <h1>Category List</h1>
          ) : (
            <h1>Category Create</h1>
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
