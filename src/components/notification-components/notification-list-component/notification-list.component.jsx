import React, { Component } from "react";

import "./notification-list.styles.scss";

import TableDisplay from "../../table-display/table-display.component";

export default class NotificationList extends Component {
  state = {
    titleFieldData: "",
    showFilter: false,
    dateStartData: "",
    dateEndData: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleShowFilter = () => {
    this.setState((prevState) => ({
      showFilter: !prevState.showFilter,
    }));
  };

  changeToDateType = (event) => {
    event.target.type = "date";
  };

  changeToTextType = (event) => {
    event.target.type = "text";
  };

  render() {
    const filters = (
      <div className="horizontal-flex margin-top">
        <div className="input-group">
          <label className="title">Date</label>
          <input
            className="text-field"
            type="text"
            name="dateStartData"
            onFocus={this.changeToDateType}
            onBlur={this.changeToTextType}
            onChange={this.handleChange}
            placeholder="3/27/2021"
          />
          <span> - </span>
          <input
            className="text-field"
            type="text"
            name="dateEndData"
            onFocus={this.changeToDateType}
            onBlur={this.changeToTextType}
            onChange={this.handleChange}
            placeholder="3/27/2021"
          />
        </div>
      </div>
    );
    return (
      <>
        <div className="content-title" onClick={this.selectModal}>
          <h1 className="title">Transaction</h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="notification-list-container">
          <div className="inputs-container">
            <div className="horizontal-flex">
              <input
                className="input-field"
                type="text"
                name="customerNameData"
                onChange={this.handleChange}
                value={this.state.titleFieldData}
                placeholder="Search by Customer Name"
              />
              <button
                className={`filter-button ${
                  this.state.showFilter ? "clicked" : ""
                }`}
                onClick={this.handleShowFilter}
              >
                Filter
              </button>
            </div>
            {this.state.showFilter ? filters : ""}
          </div>
          <TableDisplay
            tableData={[
              ["Date", "Title", "Body"],
              [
                "25 Dec 2021",
                "Holy day discount",
                "happy holyday we have a platera of products to sell to ...",
              ],
              [
                "25 Dec 2021",
                "Holy day discount",
                "happy holyday we have a platera of products to sell to ...",
              ],
              [
                "25 Dec 2021",
                "Holy day discount",
                "happy holyday we have a platera of products to sell to ...",
              ],
              [
                "25 Dec 2021",
                "Holy day discount",
                "happy holyday we have a platera of products to sell to ...",
              ],
              [
                "25 Dec 2021",
                "Holy day discount",
                "happy holyday we have a platera of products to sell to ...",
              ],
            ]}
          />
        </div>
      </>
    );
  }
}
