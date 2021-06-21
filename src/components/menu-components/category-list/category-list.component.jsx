import React, { Component } from "react";
import TableDisplay from "../../table-display/table-display.component";
import CategoryModal from "../category-modal/category-modal.component";

import "./category-list.styles.scss";

export default class CategoryList extends Component {
  state = { modal: false };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        <CategoryModal
          displayModal={this.state.modal}
          closeModal={this.selectModal}
        />
        <div className="content-title" onClick={this.selectModal}>
          <h1 className="title">Category</h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="category-list-container">
          <TableDisplay
            tableData={[
              ["Date", "Category Name", " "],
              [
                "25 Dec 2021",
                "Food",
                <div className="material-icons">edit_note</div>,
              ],
              [
                "25 Dec 2021",
                "Food",
                <div className="material-icons">edit_note</div>,
              ],
              [
                "25 Dec 2021",
                "Food",
                <div className="material-icons">edit_note</div>,
              ],
              [
                "25 Dec 2021",
                "Food",
                <div className="material-icons">edit_note</div>,
              ],
            ]}
          />
        </div>
      </>
    );
  }
}
