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
      <>
        <div className="menu-create-content-title">
          <h2>Menu</h2>
          <h3>Create</h3>
        </div>
        <div className="menu-create-container">
          <div className="create-form-container">
            <form>
              <div className="form-box">
                <h2>Info</h2>
                <h3>Basic Menu Information</h3>
                <div className="input-holder">
                  <input
                    type="text"
                    name="nameData"
                    value={this.state.nameData}
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                  <div className="custom-select">
                    <select name="categoryData" onChange={this.handleChange}>
                      <option value="">Category</option>
                      <option value="Category1">Category1</option>
                      <option value="Category2">Category2</option>
                    </select>
                    <span class="material-icons custom-arrow">
                      arrow_drop_down
                    </span>
                  </div>
                  <input
                    type="text"
                    name="typeData"
                    value={this.state.typeData}
                    placeholder="Type"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="form-box">
                <h2>General Info</h2>
                <h3>General Menu Information</h3>
                <div className="input-holder">
                  <input
                    type="text"
                    name="amountData"
                    value={this.state.amountData}
                    placeholder="Amount"
                    onChange={this.handleChange}
                  />
                  <div className="custom-select">
                    <select name="unitData" onChange={this.handleChange}>
                      <option value="">Unit</option>
                      <option value="Unit1">Unit1</option>
                      <option value="Unit2">Unit2</option>
                    </select>
                    <span class="material-icons custom-arrow">
                      arrow_drop_down
                    </span>
                  </div>
                  <input
                    type="text"
                    name="priceData"
                    value={this.state.priceData}
                    placeholder="Price"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="add-container">
                  <button className="add-button">Add</button>
                </div>
                <div className="horizontal-scroll-flex">
                  <div className="added-options">
                    <div className="text-part">
                      <h3>1 KG</h3>
                      <h4>$10</h4>
                    </div>
                    <div className="cancel-button">
                      <span class="material-icons icon">close</span>
                    </div>
                  </div>
                  <div className="added-options">
                    <div className="text-part">
                      <h3>1 KG</h3>
                      <h4>$10</h4>
                    </div>
                    <div className="cancel-button">
                      <span class="material-icons icon">close</span>
                    </div>
                  </div>
                  <div className="added-options">
                    <div className="text-part">
                      <h3>1 KG</h3>
                      <h4>$10</h4>
                    </div>
                    <div className="cancel-button">
                      <span class="material-icons icon">close</span>
                    </div>
                  </div>
                  <div className="added-options">
                    <div className="text-part">
                      <h3>1 KG</h3>
                      <h4>$10</h4>
                    </div>
                    <div className="cancel-button">
                      <span class="material-icons icon">close</span>
                    </div>
                  </div>
                  <div className="added-options">
                    <div className="text-part">
                      <h3>1 KG</h3>
                      <h4>$10</h4>
                    </div>
                    <div className="cancel-button">
                      <span class="material-icons icon">close</span>
                    </div>
                  </div>
                  <div className="added-options">
                    <div className="text-part">
                      <h3>1 KG</h3>
                      <h4>$10</h4>
                    </div>
                    <div className="cancel-button">
                      <span class="material-icons icon">close</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-box">
                <h2>Descriptions</h2>
                <h3>General Menu Information</h3>
                <textarea
                  className="textarea-input"
                  name="descriptionData"
                  value={this.state.descriptionData}
                  onChange={this.handleChange}
                  placeholder="Description"
                />
                <textarea
                  className="textarea-input"
                  name="noteData"
                  value={this.state.noteData}
                  onChange={this.handleChange}
                  placeholder="Note"
                />
              </div>
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </>
    );
  }
}
