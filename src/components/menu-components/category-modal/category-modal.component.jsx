import React, { Component } from "react";

import "./category-modal.styles.scss";

export default class CategoryModal extends Component {
  state = { categoryName: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (event) => {
    event.stopPropagation();
    this.props.closeModal();
  };

  render() {
    const modal = (
      <div className="category-modal" onClick={this.closeModal}>
        <div className="modal-content-container">
          <div className="close-button">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="category-detail">
              <span class="material-icons icon">list</span>
              <h1>Category</h1>
              <form>
                <div className="input-group">
                  <h2>Info</h2>
                  <h3>Basic user information</h3>
                  <input
                    type="text"
                    name="categoryName"
                    placeholder="Category Name"
                  />
                </div>
                <input className="submit-button" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    return this.props.displayModal ? modal : null;
  }
}
