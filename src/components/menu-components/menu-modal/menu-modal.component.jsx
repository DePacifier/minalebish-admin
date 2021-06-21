import React, { Component } from "react";

import "./menu-modal.styles.scss";

export default class MenuModal extends Component {
  state = {
    nameData: "",
    categoryData: "",
    unitData: "",
    priceData: "",
    descriptionData: "",
    noteData: "",
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
          <h3>Basic menu information</h3>
          <input
            className="spacing"
            type="text"
            name="nameData"
            placeholder="Name"
            value={this.state.nameData}
            onChange={this.handleChange}
          />
          <div className="custom-select">
            <select name="categoryData" onChange={this.handleChange}>
              <option value="">Category</option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
            </select>
            <span class="material-icons custom-arrow">arrow_drop_down</span>
          </div>
          <h2>General Info</h2>
          <h3>General menu information</h3>
          <div className="custom-select spacing">
            <select name="unitData" onChange={this.handleChange}>
              <option value="">Unit</option>
              <option value="unit1">Unit1</option>
              <option value="unit2">Unit2</option>
            </select>
            <span class="material-icons custom-arrow">arrow_drop_down</span>
          </div>
          <input
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            name="priceData"
            placeholder="Price"
            value={this.state.priceData}
            onChange={this.handleChange}
          />
          <h2>Descriptions</h2>
          <h3>General menu information</h3>
          <textarea
            className="textarea-input"
            name="descriptionData"
            placeholder="Description"
            value={this.state.descriptionData}
            onChange={this.handleChange}
          />
          <textarea
            className="textarea-input"
            name="noteData"
            placeholder="Note"
            value={this.state.noteData}
            onChange={this.handleChange}
          />
        </div>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );

    const listView = (
      <div className="list-view-container">
        <div className="detail-container">
          <div className="display-group">
            <span className="label-text">Date</span>
            <p className="content-text">25 Dec 2021</p>
          </div>
          <div className="display-group">
            <span className="label-text">Name</span>
            <p className="content-text">Selit</p>
          </div>
          <div className="display-group">
            <span className="label-text">Category</span>
            <p className="content-text">Food</p>
          </div>
          <div className="display-group">
            <span className="label-text">Price And Amount</span>
            <div className="horizontal-scroll-flex">
              <div className="price-container">
                <h3>1 KG</h3>
                <h4>$10</h4>
              </div>
              <div className="price-container">
                <h3>2 KG</h3>
                <h4>$18</h4>
              </div>
              <div className="price-container">
                <h3>3 KG</h3>
                <h4>$26</h4>
              </div>
              <div className="price-container">
                <h3>5 KG</h3>
                <h4>$35</h4>
              </div>
              <div className="price-container">
                <h3>5 KG</h3>
                <h4>$44</h4>
              </div>
              <div className="price-container">
                <h3>6 KG</h3>
                <h4>$53</h4>
              </div>
            </div>
            <div className="display-group text-area">
              <span className="label-text">Note</span>
              <p className="content-text">
                “I’ve Learned That People Will Forget What You Said, People Will
                Forget What You Did, But People Will Never Forget How You Made
                Them Feel.”
              </p>
            </div>
            <div className="display-group text-area">
              <span className="label-text">Description</span>
              <p className="content-text">
                “I’ve Learned That People Will Forget What You Said, People Will
                Forget What You Did, But People Will Never Forget How You Made
                Them Feel.”
              </p>
            </div>
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
      <div className="menu-modal" onClick={this.closeModal}>
        <div className="modal-content-container">
          <div className="close-button">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-detail">
              <span class="material-icons icon">restaurant_menu</span>
              <h1>Menu</h1>
              {this.state.showEdit ? editView : listView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
