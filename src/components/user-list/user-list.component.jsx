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
        <h1 className="title" onClick={this.selectModal}>
          Log
        </h1>
        <h2 className="subtitle">List</h2>
        <div className="user-list-container">
          <form className="form-class">
            <div className="input-group">
              <input type="text" placeholder="Search by any field" />
              <select name="status">
                <option value="status1">status1</option>
                <option value="status2">status2</option>
              </select>
              <select name="role">
                <option value="role1">role1</option>
                <option value="role2">role2</option>
              </select>
            </div>
            <input type="submit" value="filter" />
          </form>
          <TableDisplay />
        </div>
      </>
    );
  }
}
