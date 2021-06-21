import React, { Component } from "react";

import "./transaction-list.styles.scss";

import TransactionEditModal from "../transaction-edit-modal/transaction-edit-modal.component";
import TableDisplay from "../../table-display/table-display.component";

export default class TransactionList extends Component {
  state = {
    customerNameData: "",
    showFilter: false,
    dateStartData: "",
    dateEndData: "",
    minTotalPriceData: "",
    maxTotalPriceData: "",
    statusData: "",
    GradingData: "",
    modal: false,
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

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
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
        <div className="input-group">
          <label className="title">Total Price</label>
          <input
            className="text-field"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            name="minTotalPriceData"
            onChange={this.handleChange}
            value={this.state.minTotalPriceData}
            placeholder="min"
          />
          <span> - </span>
          <input
            className="text-field"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            name="maxTotalPriceData"
            onChange={this.handleChange}
            value={this.state.maxTotalPriceData}
            placeholder="max"
          />
        </div>
        <div className="input-group">
          <div className="custom-select">
            <select name="statusData" onChange={this.handleChange}>
              <option value="">Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="void">Void</option>
            </select>
            <span class="material-icons custom-arrow">arrow_drop_down</span>
          </div>
        </div>
        <div className="input-group">
          <div className="custom-select">
            <select name="gradingData" onChange={this.handleChange}>
              <option value="">Grading</option>
              <option value="platinium">Platinium</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
            <span class="material-icons custom-arrow">arrow_drop_down</span>
          </div>
        </div>
      </div>
    );
    return (
      <>
        {this.state.modal ? (
          <TransactionEditModal closeModal={this.selectModal} />
        ) : (
          ""
        )}
        <div className="content-title" onClick={this.selectModal}>
          <h1 className="title">Transaction</h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="transaction-list-container">
          <div className="inputs-container">
            <div className="horizontal-flex">
              <input
                className="input-field"
                type="text"
                name="customerNameData"
                onChange={this.handleChange}
                value={this.state.customerNameData}
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
              [
                "Date",
                "Customer Name",
                "Item Names",
                "Total Quantity",
                "Total Price",
                "Status",
                " ",
              ],
              [
                "25 Dec 2021",
                "Jhon Delvce",
                "Doro,Barley, Lead Tea, Brookly ...",
                "7",
                "$ 300",
                "Completed",
                <div className="material-icons">edit_note</div>,
              ],
              [
                "25 Dec 2021",
                "Jhon Delvce",
                "Doro,Barley, Lead Tea, Brookly ...",
                "7",
                "$ 300",
                "Void",
                <div className="material-icons">edit_note</div>,
              ],
              [
                "25 Dec 2021",
                "Jhon Delvce",
                "Doro,Barley, Lead Tea, Brookly ...",
                "7",
                "$ 300",
                "Completed",
                <div className="material-icons">edit_note</div>,
              ],
            ]}
          />
        </div>
      </>
    );
  }
}
