import React, { Component } from "react";

import "./category-modal.styles.scss";

export default class CategoryModal extends Component {
  state = { categoryName: this.props.selectedCategory.name, failed: false };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (event) => {
    event.stopPropagation();
    this.props.closeModal();
  };

  handleCategoryUpdate = (event) => {
    event.preventDefault();
    const axios = this.props.axios;
    const id = this.props.selectedCategory.id;
    axios
      .patch(`/category/${id}`, { name: this.state.categoryName })
      .then((response) => {
        //successfully updated the category
        console.log(response);
        this.setState({ categoryName: "", failed: false }, () =>
          this.props.closeModal()
        );
      })
      .catch((error) => {
        this.setState({ failed: true });
        console.log(error.response);
      });
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
              <span className="material-icons icon">list</span>
              <h1>Category</h1>
              {this.failed ? "Failed to update the category" : ""}
              <form onSubmit={this.handleCategoryUpdate}>
                <div className="input-group">
                  <h2>Info</h2>
                  <h3>Basic user information</h3>
                  <input
                    type="text"
                    name="categoryName"
                    placeholder="Category Name"
                    value={this.state.categoryName}
                    onChange={this.handleChange}
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
