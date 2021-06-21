import React, { Component } from "react";

import TableDisplay from "../table-display/table-display.component";
import Modal from "../modal/modal.component";

import "./user-list.styles.scss";

export default class UserList extends Component {
  state = { modal: false, showFilters: false };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  handleShowFilters = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      showFilters: !prevState.showFilters,
    }));
  };

  render() {
    const filters = (
      <>
        <div className="custom-select">
          <select name="status">
            <option value="Status1">Status1</option>
            <option value="Status2">Status2</option>
          </select>
          <span class="material-icons custom-arrow">arrow_drop_down</span>
        </div>
        <div className="custom-select">
          <select name="role">
            <option value="Role1">Role1</option>
            <option value="Role2">Role2</option>
          </select>
          <span class="material-icons custom-arrow">arrow_drop_down</span>
        </div>
      </>
    );

    return (
      <>
        <Modal displayModal={this.state.modal} closeModal={this.selectModal} />
        <div className="content-title">
          <h1 className="title special" onClick={this.selectModal}>
            User
          </h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="scrollable">
          <div className="user-list-container">
            <form className="form-class" onSubmit={this.handleShowFilters}>
              <div className="input-group">
                <input type="text" placeholder="Search by any field" />
                {this.state.showFilters ? filters : ""}
              </div>
              <input
                className={`filter-button ${
                  this.state.showFilters ? "active" : ""
                }`}
                type="submit"
                value="Filter"
              />
            </form>
            <TableDisplay
              tableData={[
                ["Date", "Name", "Email", "Phone", "Role", " "],
                [
                  "25 Dec 2021",
                  "Johnny Carpenter",
                  "eyob@gmail.com",
                  "0937 112506",
                  "Admin",
                  "user-list-toggle-component",
                ],
                [
                  "25 Dec 2021",
                  "Johnny Carpenter",
                  "eyob@gmail.com",
                  "0937 112506",
                  "Admin",
                  "user-list-toggle-component",
                ],
                [
                  "25 Dec 2021",
                  "Johnny Carpenter",
                  "eyob@gmail.com",
                  "0937 112506",
                  "Admin",
                  "user-list-toggle-component",
                ],
                [
                  "25 Dec 2021",
                  "Johnny Carpenter",
                  "eyob@gmail.com",
                  "0937 112506",
                  "Admin",
                  "user-list-toggle-component",
                ],
                [
                  "25 Dec 2021",
                  "Johnny Carpenter",
                  "eyob@gmail.com",
                  "0937 112506",
                  "Admin",
                  "user-list-toggle-component",
                ],
              ]}
            />
          </div>
        </div>
      </>
    );
  }
}
