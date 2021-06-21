import React, { Component } from "react";

import "./menu-list.styles.scss";

import TableDisplay from "../../table-display/table-display.component";
import MenuModal from "../menu-modal/menu-modal.component";

export default class MenuList extends Component {
  state = { category: "", modal: false };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        {this.state.modal ? (
          <MenuModal
            displayModal={this.state.modal}
            closeModal={this.selectModal}
          />
        ) : (
          ""
        )}
        <div className="content-title" onClick={this.selectModal}>
          <h1 className="title">Menu</h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="menu-list-container">
          <div className="input-holder">
            <span className="input-label">Gender</span>
            <div className="custom-select">
              <select
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <option value="">Category</option>
                <option value="Category1">Category1</option>
                <option value="Category2">Category2</option>
              </select>
              <span className="material-icons custom-arrow">
                arrow_drop_down
              </span>
            </div>
          </div>
          <TableDisplay
            tableData={[
              ["Date", "Name", "Category", " "],
              ["25 Dec 2021", "Selit", "Oil", "Menu list toggle"],
              ["25 Dec 2021", "Selit", "Oil", "Menu list toggle"],
              ["25 Dec 2021", "Selit", "Oil", "Menu list toggle"],
              ["25 Dec 2021", "Selit", "Oil", "Menu list toggle"],
              ["25 Dec 2021", "Selit", "Oil", "Menu list toggle"],
            ]}
          />
        </div>
      </>
    );
  }
}
