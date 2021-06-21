import React, { Component } from "react";

import "./grading-list.styles.scss";

import TableDisplay from "../../table-display/table-display.component";
import GradingModal from "../grading-modal/grading-modal.component";

export default class GradingList extends Component {
  state = { modal: false };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        {this.state.modal ? <GradingModal closeModal={this.selectModal} /> : ""}
        <div className="content-title" onClick={this.selectModal}>
          <h1 className="title">Grading</h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="grading-list-container">
          <TableDisplay
            tableData={[
              ["Date", "Transaction Amount", "Title", "Grading Icon", " "],
              [
                "25 Dec 2021",
                "$100 - $300",
                "Gold",
                "getGoldIcon",
                "grading list toggle",
              ],
              [
                "25 Dec 2021",
                "$100 - $300",
                "Gold",
                "getGoldIcon",
                "grading list toggle",
              ],
              [
                "25 Dec 2021",
                "$100 - $300",
                "Gold",
                "getGoldIcon",
                "grading list toggle",
              ],
            ]}
          />
        </div>
      </>
    );
  }
}
