import React, { Component } from "react";

import "./menu-create.styles.scss";

export default class MenuCreate extends Component {
  state = {
    name: "",
    category: "",
    unit: "",
    price: "",
    description: "",
    note: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="menu-create-container">
        <div className="title-description">
          <h2>Menu</h2>
          <h4>Create</h4>
        </div>
        <div className="create-form-container">
          <form>
            <div className="form-box">
              <h2>Info</h2>
              <h3>Basic Menu Information</h3>
              <div className="input-holder">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={this.handleChange}
                />
                <select
                  name="category"
                  // onSelect={this.handleSelect}
                  placeholder="Category"
                >
                  <option value="category-1">1</option>
                  <option value="category-2">2</option>
                  <option value="category-3">3</option>
                  <option value="category-4">4</option>
                  <option value="category-5">5</option>
                  <option value="category-6">6</option>
                </select>
              </div>
            </div>
            <div className="form-box">
              <h2>General Info</h2>
              <h3>General Menu Information</h3>
              <div className="input-holder">
                <select
                  name="unit"
                  // onSelect={this.handleSelect}
                  placeholder="Unit"
                >
                  <option value="category-1">1</option>
                  <option value="category-2">2</option>
                  <option value="category-3">3</option>
                  <option value="category-4">4</option>
                  <option value="category-5">5</option>
                  <option value="category-6">6</option>
                </select>
                <input
                  type="text"
                  name="price"
                  value={this.state.price}
                  placeholder="Price"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-box">
              <h2>Descriptions</h2>
              <h3>General Menu Information</h3>
              <textarea
                name="description"
                onChange={this.handleChange}
                placeholder="Description"
              />
              <textarea
                name="note"
                onChange={this.handleChange}
                placeholder="Note"
              />
            </div>
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
