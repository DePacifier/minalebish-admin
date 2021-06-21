import React, { Component } from "react";

import "./confirmation-modal.styles.scss";

export default class ConfirmationModal extends Component {
  state = { reasonData: "", showReason: false };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (event) => {
    event.stopPropagation();
    this.props.closeModal();
  };

  handleShowReasonChange = () => {
    this.setState({ showReason: true });
  };

  render() {
    const reasonVoidView = (
      <div className="message-container">
        <label className="title">Reason</label>
        <textarea
          name="reasonData"
          onChange={this.handleChange}
          placeholder="Reason"
        />
        <div className="buttons-container">
          <button className="yes-button">Yes</button>
          <button className="no-button" onClick={this.closeModal}>
            Cancel
          </button>
        </div>
      </div>
    );

    const confirmVoidView = (
      <div className="message-container">
        <label className="title">Confirmation</label>
        <p>Are you sure that you want to void current transaction ?</p>
        <div className="buttons-container">
          <button className="yes-button" onClick={this.handleShowReasonChange}>
            Yes
          </button>
          <button className="no-button" onClick={this.closeModal}>
            No
          </button>
        </div>
      </div>
    );
    return (
      <div className="transaction-confirm-void-modal" onClick={this.closeModal}>
        <div className="modal-content-container">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {this.state.showReason ? reasonVoidView : confirmVoidView}
          </div>
        </div>
      </div>
    );
  }
}
