import React, { Component } from "react";

import "./table-display.styles.scss";

const sliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

const generatePageNumbers = (arr) => {
  let numArr = [];
  for (let i = 1; i <= arr.length; i++) {
    numArr.push(i);
  }
  return numArr;
};

let tableRaw = [
  ["Date", "Name", "Category", "Price", "Price Old", "Unit", ""],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
  [
    "25 Dec 2021",
    "Selit",
    "Oil",
    "$ 10",
    "$ 9",
    "Pound",
    <span class="material-icons-outlined">edit_note</span>,
  ],
];
export default class TableDisplay extends Component {
  headerData =
    this.props.tableData !== undefined ? this.props.tableData[0] : tableRaw[0];
  tableValueData =
    this.props.tableData !== undefined
      ? this.props.tableData.slice(1)
      : tableRaw.slice(1);
  initialDividedTableData = sliceIntoChunks(this.tableValueData, 5);
  initialTableData = this.initialDividedTableData[0];
  pageLinks = generatePageNumbers(this.initialDividedTableData);

  state = {
    totalCount: this.tableValueData.length,
    viewSize: 5,
    tableHeaderData: this.headerData,
    dividedTableData: this.initialDividedTableData,
    tableData: this.initialTableData,
    pageLinks: this.pageLinks,
    chunkInView: 0,
  };

  handleItemViewSize = (event) => {
    const value = parseInt(event.target.value);
    if (value !== this.state.viewSize) {
      const newDividedTableData = sliceIntoChunks(this.tableValueData, value);
      const newPageLinks = generatePageNumbers(newDividedTableData);
      const resetChunkInView = 0;
      this.setState({
        viewSize: value,
        dividedTableData: newDividedTableData,
        tableData: newDividedTableData[resetChunkInView],
        pageLinks: newPageLinks,
        chunkInView: resetChunkInView,
      });
    }
  };

  handlePageLink = (event, index) => {
    event.preventDefault();
    const newTableData = this.state.dividedTableData[index];
    this.setState({
      chunkInView: index,
      tableData: newTableData,
    });
  };

  handlePageNavigation = (index) => {
    let newTableData;
    let newIndex;
    const viewLimit = this.state.pageLinks.length - 1;
    if (index < 0) {
      newTableData = this.state.dividedTableData[0];
      newIndex = 0;
    } else if (index > viewLimit) {
      newTableData = this.state.dividedTableData[viewLimit];
      newIndex = viewLimit;
    } else {
      newTableData = this.state.dividedTableData[index];
      newIndex = index;
    }

    this.setState({
      chunkInView: newIndex,
      tableData: newTableData,
    });
  };

  render() {
    const itemDesc = () => {
      let initialCount = 1 + this.state.viewSize * this.state.chunkInView;
      let finalCount =
        this.state.viewSize * this.state.chunkInView + this.state.viewSize;
      return (
        <div className="item desc">
          {initialCount}
          {finalCount > this.state.totalCount
            ? initialCount === this.state.totalCount
              ? ""
              : " - " + this.state.totalCount
            : " - " + finalCount}{" "}
          out of {this.state.totalCount} items
        </div>
      );
    };

    return (
      <div className="table-main-flex-container">
        <table className="display-table">
          <thead>
            <tr className="table-header">
              {this.state.tableHeaderData.map((tableHeaders) => (
                <th>{tableHeaders}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((tableData) => (
              <tr className="table-data">
                {tableData.map((tableValues) => (
                  <td>{tableValues}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-navigation">
          <div className="item page-nav">
            <span
              className="material-icons-outlined"
              onClick={() => this.handlePageNavigation(0)}
            >
              first_page
            </span>
            <span
              className="material-icons-outlined"
              onClick={() =>
                this.handlePageNavigation(this.state.chunkInView - 1)
              }
            >
              navigate_before
            </span>
            <span className="links-holder">
              {this.state.pageLinks.map((num, index) => (
                <a
                  className={`page ${
                    index === this.state.chunkInView ? "active" : ""
                  }`}
                  onClick={(event) => this.handlePageLink(event, index)}
                >
                  {" "}
                  {num}{" "}
                </a>
              ))}
            </span>
            <span
              className="material-icons-outlined"
              onClick={() =>
                this.handlePageNavigation(this.state.chunkInView + 1)
              }
            >
              navigate_next
            </span>
            <span
              className="material-icons-outlined"
              onClick={() =>
                this.handlePageNavigation(this.state.pageLinks.length - 1)
              }
            >
              last_page
            </span>
          </div>
          <div className="item per-page">
            <span>View </span>

            <select name="item-view" onChange={this.handleItemViewSize}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>

            <span> items per page</span>
          </div>
          {itemDesc()}
        </div>
      </div>
    );
  }
}
