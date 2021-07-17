import React, { Component } from "react";

import "./category-create.styles.scss";

export default class CategoryCreate extends Component {
  state = { categoryName: "", failed: false, successful: false };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCreateCategory = (event) => {
    event.preventDefault();
    const axios = this.props.axios;
    axios
      .post("/category", { name: this.state.categoryName })
      .then((response) => {
        //successfully created the category
        console.log(response);
        this.setState({ categoryName: "", failed: false, successful: true });
      })
      .catch((error) => {
        this.setState({ failed: true, successful: false });
        console.log(error.response);
      });
  };

  render() {
    return (
      <>
        <div className="content-title">
          <h1 className="title">Category</h1>
          <h2 className="subtitle">Create</h2>
        </div>
        <div className="category-create-container">
          {this.state.successful ? "Category Created !!" : ""}
          {this.state.failed ? "Category Creation Failed !!" : ""}
          <form onSubmit={this.handleCreateCategory}>
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
