import React, { Component } from "react";

import "./category-create.styles.scss";

export default class CategoryCreate extends Component {
  state = { categoryName: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="content-title">
          <h1 className="title">Category</h1>
          <h2 className="subtitle">Create</h2>
        </div>
        <div className="category-create-container">
          <form>
            <div className="input-holder">
              <h2>Info</h2>
              <h3>Basic Category Information</h3>
              <input
                type="text"
                name="categoryName"
                value={this.state.categoryName}
                placeholder="Category Name"
                onChange={this.handleChange}
              />
            </div>
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
