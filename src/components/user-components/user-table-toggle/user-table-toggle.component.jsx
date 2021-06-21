import React, { Component } from "react";

import "./user-table-toggle.styles.scss";

export default class UserTableToggle extends Component {
  state = { toggleStatus: this.props.toggleStatus };

  handleToggleChange = () => {
    this.setState((prevState) => ({
      toggleStatus: !prevState.toggleStatus,
    }));
  };

  render() {
    return (
      <div className="user-list-tableToggle">
        <span className="material-icons">edit_note</span>
        <span
          class={`material-icons ${
            this.state.toggleStatus ? "activated" : "deactivated"
          }`}
        >
          fiber_manual_record
        </span>
        <label className="toggle">
          <input
            type="checkbox"
            className="toggle-input"
            name="gender"
            value={this.state.toggleStatus}
            onChange={this.handleToggleChange}
          />
          <div className="toggle-bar">
            <div className="toggle-spin"></div>
          </div>
        </label>
      </div>
    );
  }
}
