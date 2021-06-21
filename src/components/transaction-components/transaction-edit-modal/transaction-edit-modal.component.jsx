import React, { Component } from "react";

import "./transaction-edit-modal.styles.scss";

import ConfirmationModal from "../confirmation-modal/confirmation-modal.component";

export default class TransactionEditModal extends Component {
  state = {
    showEdit: false,
    customerNameData: "",
    statusData: "",
    processedByData: "",
    voidReasonData: "",
    noteData: "",
    itemsDataList: [
      ["Selit", "7", "kg", "100", "700"],
      ["Selit", "7", "kg", "100", "700"],
      ["Selit", "7", "kg", "100", "700"],
      ["Selit", "7", "kg", "100", "700"],
    ],
    modal: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (event) => {
    event.stopPropagation();
    this.props.closeModal();
  };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  handleShowEditChange = (value) => {
    this.setState({ showEdit: value });
  };

  handleQuantityAmountChange = (event, index) => {
    const value = event.target.value;
    const changedList = [
      ...this.state.itemsDataList[index].slice(0, 1),
      value,
      ...this.state.itemsDataList[index].slice(2),
    ];
    const changedItemsDataList = [
      ...this.state.itemsDataList.slice(0, index),
      changedList,
      ...this.state.itemsDataList.slice(index + 1),
    ];
    this.setState({
      itemsDataList: changedItemsDataList,
    });
  };

  handleQuantityUnitChange = (event, index) => {
    const value = event.target.value;
    const changedList = [
      ...this.state.itemsDataList[index].slice(0, 2),
      value,
      ...this.state.itemsDataList[index].slice(3),
    ];
    const changedItemsDataList = [
      ...this.state.itemsDataList.slice(0, index),
      changedList,
      ...this.state.itemsDataList.slice(index + 1),
    ];
    this.setState({
      itemsDataList: changedItemsDataList,
    });
  };

  handleRemoveItem = (index) => {
    console.log(index);
    const newItemsDataList = this.state.itemsDataList.filter(
      (item, itemIndex) => itemIndex !== index
    );
    console.log(newItemsDataList);
    this.setState({
      itemsDataList: newItemsDataList,
    });
  };

  render() {
    const editTransactionView = (
      <div className="edit-container">
        <div className="scrollable">
          <div className="data-container">
            <span className="title">Customer Name</span>
            <p>Johnny Carpenter</p>
          </div>
          <textarea
            placeholder="Note"
            name="noteData"
            value={this.state.noteData}
            onChange={this.handleChange}
          />
          <div className="table-container">
            <table className="display-table">
              <thead>
                <tr className="table-header">
                  <th className="first">Item Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th className="last">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.itemsDataList.map((item, index) => (
                  <tr key={index} className="table-data">
                    <td className="first">{item[0]}</td>
                    <td>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={item[1]}
                        onChange={(event) =>
                          this.handleQuantityAmountChange(event, index)
                        }
                      />
                      <div className="custom-select">
                        <select
                          defaultValue={item[2]}
                          onChange={(event) =>
                            this.handleQuantityUnitChange(event, index)
                          }
                        >
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                          <option value="lb">lb</option>
                        </select>
                        <span class="material-icons custom-arrow">
                          arrow_drop_down
                        </span>
                      </div>
                    </td>
                    <td>$ {item[3]}</td>
                    <td className="table-flex last">
                      <span>$ {parseFloat(item[1]) * parseFloat(item[3])}</span>
                      <span
                        className="material-icons remove-icon"
                        onClick={() => this.handleRemoveItem(index)}
                      >
                        cancel
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grand-total">
            <div>
              <span className="label">Grand Total</span>
              <h4 className="display-value">$ 4,900</h4>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="submit-button">Submit</button>
          <button className="delete-button" onClick={this.selectModal}>
            Void
          </button>
        </div>
      </div>
    );

    const transactionView = (
      <div className="list-view-container">
        <div className="scrollable">
          <div className="data-container">
            <span className="title">Customer Name</span>
            <p>Johnny Carpenter</p>
          </div>
          <div className="data-container">
            <span className="title">Status</span>
            <p>Void</p>
          </div>
          <div className="data-container">
            <span className="title">Processed By</span>
            <p>Belay Demeke</p>
          </div>
          <div className="note-container">
            <span className="title">Void Reason</span>
            <p>
              “I’ve Learned That People Will Forget What You Said, People Will
              Forget What You Did, But People Will Never Forget How You Made
              Them Feel.”
            </p>
          </div>
          <div className="note-container">
            <span className="title">Note</span>
            <p>
              “I’ve Learned That People Will Forget What You Said, People Will
              Forget What You Did, But People Will Never Forget How You Made
              Them Feel.”
            </p>
          </div>
          <div className="detail-container">
            <table className="display-table">
              <thead>
                <tr className="table-header">
                  <th className="first">Item Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th className="last">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.itemsDataList.map((item, index) => (
                  <tr key={index} className="table-data">
                    <td className="first">{item[0]}</td>
                    <td>
                      {item[1]} {item[2]}
                    </td>
                    <td>$ {item[3]}</td>
                    <td className="last">$ {item[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grand-total">
            <div>
              <span className="label">Grand Total</span>
              <h4 className="display-value">$ 4,900</h4>
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="edit-button flexy"
            onClick={() => this.handleShowEditChange(true)}
          >
            <span class="material-icons">edit_note</span>
            <span class="text"> Edit</span>
          </button>
          <button className="suspend-button" onClick={this.closeModal}>
            Void
          </button>
        </div>
      </div>
    );
    return (
      <>
        {this.state.modal ? (
          <ConfirmationModal closeModal={this.selectModal} />
        ) : (
          ""
        )}
        <div className="transaction-edit-modal" onClick={this.closeModal}>
          <div className="modal-content-container">
            <div className="close-button">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
            </div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="menu-detail">
                <span className="material-icons icon">sync_alt</span>
                <h1>Transaction</h1>
                {this.state.showEdit ? editTransactionView : transactionView}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
