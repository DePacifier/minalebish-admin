import React, { Component } from "react";
import { ReactComponent as GradingLogo } from "../../../icons/grading.svg";

import "./grading-modal.styles.scss";

export default class GradingModal extends Component {
  state = {
    titleData: "",
    transactionStartAmount: "",
    transactionEndAmount: "",
    gradingData: "",
    showEdit: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (event) => {
    event.stopPropagation();
    this.props.closeModal();
  };

  handleShowEditChange = (value) => {
    this.setState({ showEdit: value });
  };

  render() {
    const editView = (
      <form>
        <div className="input-group">
          <h2>Info</h2>
          <h3>Basic Grading information</h3>
          <input
            className="text-field"
            type="text"
            name="titleData"
            placeholder="Title"
            value={this.state.titleData}
            onChange={this.handleChange}
          />
          <h2 className="h2-start">Transaction Amount</h2>
          <div className="horizontal-flex">
            <input
              className="num-field"
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              name="transactionStartAmount"
              placeholder="Start"
              value={this.state.transactionStartAmount}
              onChange={this.handleChange}
            />
            <input
              className="num-field"
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              name="transactionEndAmount"
              placeholder="End"
              value={this.state.transactionEndAmount}
              onChange={this.handleChange}
            />
          </div>

          <h2 className="h2-start">Grading</h2>
          <div className="custom-select">
            <select name="gradingData" onChange={this.handleChange}>
              <option value="">Grading</option>
              <option value="platinum">Platinum</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
            </select>
            <span class="material-icons custom-arrow">arrow_drop_down</span>
          </div>
        </div>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );

    const listView = (
      <div className="list-view-container">
        <div className="detail-container">
          <div className="display-group">
            <span className="label-text">Title</span>
            <p className="content-text">Gold</p>
          </div>
          <div className="display-group">
            <span className="label-text">Transaction Amount</span>
            <p className="content-text">$ 100 - $ 300</p>
          </div>
          <div className="display-group">
            <span className="label-text">Grading Icon</span>
            <p className="content-text">icon</p>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="edit-button flexy"
            onClick={() => this.handleShowEditChange(true)}
          >
            <span class="material-icons icon">edit_note</span>
            <span class="text"> Edit</span>
          </button>
          <button className="suspend-button" onClick={this.closeModal}>
            Suspend
          </button>
        </div>
      </div>
    );

    return (
      <div className="customer-modal" onClick={this.closeModal}>
        <div className="modal-content-container">
          <div className="close-button">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-detail">
              <GradingLogo className="icon" />
              <h1>Grading</h1>
              {this.state.showEdit ? editView : listView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
