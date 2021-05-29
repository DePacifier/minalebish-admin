import React, { Component } from "react";

import TableDisplay from "../table-display/table-display.component";
import Modal from "../modal/modal.component";

import "./user-list.styles.scss";

export default class UserList extends Component {
  state = { modal: false };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        <Modal displayModal={this.state.modal} closeModal={this.selectModal} />
        <h1 className="title special" onClick={this.selectModal}>
          User
        </h1>
        <h2 className="subtitle">List</h2>
        <div className="user-list-container">
          <form className="form-class">
            <div className="input-group">
              <input type="text" placeholder="Search by any field" />
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
            </div>
            <input className="filter-button" type="submit" value="Filter" />
          </form>
          <TableDisplay />
        </div>
      </>
    );
  }
}
