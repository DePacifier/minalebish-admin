import React, { Component } from "react";

import "./customer-list-edit-modal.styles.scss";

import TableDisplay from "../../table-display/table-display.component";
import CustomerTransactionEditModal from "../customer-transaction-edit-modal/customer-transaction-edit-modal.component";

export default class CustomerListEditModal extends Component {
  state = {
    startDateData: "",
    endDateData: "",
    minPriceData: "",
    maxPriceData: "",
    minQuantityData: "",
    maxQuantityData: "",
    showEditTransactionModal: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (event) => {
    event.stopPropagation();
    this.props.closeModal();
  };

  handleShowEditTransaction = () => {
    this.setState((prevState) => ({
      showEditTransactionModal: !prevState.showEditTransactionModal,
    }));
  };

  handleToTypeDate = (event) => {
    console.log(event);
    event.target.type = "date";
  };

  handleToTypeText = (event) => {
    console.log(event);
    event.target.type = "text";
  };

  render() {
    return (
      <>
        {this.state.showEditTransactionModal ? (
          <CustomerTransactionEditModal
            closeModal={this.handleShowEditTransaction}
          />
        ) : (
          ""
        )}
        <div className="customer-list-edit-modal" onClick={this.closeModal}>
          <div className="modal-content-container">
            <div className="close-button">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
            </div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="menu-detail">
                <div>
                  <span className="material-icons icon">groups</span>
                  <span className="material-icons icon">sync_alt</span>
                </div>
                <h1 onClick={this.handleShowEditTransaction}>
                  Customer's Transaction
                </h1>
              </div>
              <div className="input-container">
                <div className="input-group">
                  <span className="label">Date</span>
                  <input
                    className="text-field"
                    type="text"
                    placeholder="3-27-2021"
                    name="startDateData"
                    onChange={this.handleChange}
                    onFocus={this.handleToTypeDate}
                    onBlur={this.handleToTypeText}
                  />
                  <span className="separator"> - </span>
                  <input
                    className="text-field"
                    type="text"
                    placeholder="3-27-2021"
                    name="endDateData"
                    onChange={this.handleChange}
                    onFocus={this.handleToTypeDate}
                    onBlur={this.handleToTypeText}
                  />
                </div>
                <div className="input-group">
                  <span className="label">Total Price</span>
                  <input
                    className="text-field"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="minPriceData"
                    placeholder="min"
                    onChange={this.handleChange}
                    value={this.state.minPriceData}
                  />
                  <span className="separator"> - </span>
                  <input
                    className="text-field"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="maxPriceData"
                    placeholder="max"
                    onChange={this.handleChange}
                    value={this.state.maxPriceData}
                  />
                </div>
                <div className="input-group">
                  <span className="label">Total Price</span>
                  <input
                    className="text-field"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="minQuantityData"
                    placeholder="min"
                    onChange={this.handleChange}
                    value={this.state.minQuantityData}
                  />
                  <span className="separator"> - </span>
                  <input
                    className="text-field"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name="maxQuantityData"
                    placeholder="max"
                    onChange={this.handleChange}
                    value={this.state.maxQuantityData}
                  />
                </div>
              </div>
              <div className="display-contents-container">
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
              <div className="button-and-details-container">
                <button className="new-transaction-button">
                  New Transaction
                </button>
                <div className="details">
                  <div className="detail-group">
                    <h4 className="value-display alone">Abebe Kebede</h4>
                  </div>
                  <div className="detail-group">
                    <span className="label">Total Transaction</span>
                    <h4 className="value-display">500</h4>
                  </div>
                  <div className="detail-group">
                    <span className="label">Total Expense</span>
                    <h4 className="value-display">$ 25,000</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
