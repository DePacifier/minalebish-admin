import React, { Component } from "react";

import "./transaction-create.styles.scss";

export default class TransactionCreate extends Component {
  state = {
    searchData: "",
    noteData: "",
    categoryData: "",
    itemData: "",
    varietyData: "",
    quantityData: "",
    searchResult: [],
    itemsList: [
      ["shinkurt", "30 KG", "$6"],
      ["shinkurt", "30 KG", "$6"],
      ["shinkurt", "30 KG", "$6"],
      ["shinkurt", "30 KG", "$6"],
      ["shinkurt", "30 KG", "$6"],
      ["shinkurt", "30 KG", "$6"],
      ["shinkurt", "30 KG", "$6"],
      ["shinkurt", "30 KG", "$6"],
    ],
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleGetInitials = (name) => {
    const splitName = name.split(" ");
    let initials = "";
    for (let i in splitName) {
      initials += splitName[i][0];
    }

    return initials;
  };

  handleSearchChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchData: value,
      searchResult: [[null, "Amber Lynch", "Doctor", "gold"]],
    });
  };

  render() {
    return (
      <>
        <div className="content-title transaction" onClick={this.selectModal}>
          <h1 className="title">Transaction</h1>
          <h2 className="subtitle">Create</h2>
        </div>
        <div className="transaction-create-container">
          <div className="input-content-container">
            <div className="input-holder">
              <div className="horizontal-flex">
                <div className="input-title">
                  <label className="title">Info</label>
                  <label className="subtitle">Basic Customer Information</label>
                </div>
                <button className="new-customer-button">New Customer</button>
              </div>
              <div className="search-bar-holder">
                <input
                  className="search-bar"
                  type="search"
                  placeholder="Customer"
                  value={this.state.searchData}
                  onChange={this.handleSearchChange}
                />
                <span className="material-icons search-icon">search</span>
                <table className="search-table">
                  <tbody>
                    {this.state.searchResult.map((customer, index) => (
                      <tr key={index + 100} className="table-row">
                        <td className="table-item flex-centered">
                          {customer[0] ? (
                            <img src="" alt="profile" />
                          ) : (
                            <div className="circular-user">
                              {this.handleGetInitials(customer[1])}
                            </div>
                          )}
                        </td>
                        <td className="table-item">{customer[1]}</td>
                        <td className="table-item">{customer[2]}</td>
                        <td className="table-item">Grading</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="input-holder">
              <textarea
                name="noteData"
                onChange={this.handleChange}
                placeholder="Note"
                value={this.state.noteData}
              />
            </div>
            <div className="input-holder">
              <div className="input-title">
                <label className="title">Items</label>
                <label className="subtitle">Basic Address Information</label>
              </div>
              <div className="custom-select">
                <select name="categoryData" onChange={this.handleChange}>
                  <option value="">Category</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="void">Void</option>
                </select>
                <span class="material-icons custom-arrow">arrow_drop_down</span>
              </div>
              <div className="custom-select">
                <select name="itemData" onChange={this.handleChange}>
                  <option value="">Item</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="void">Void</option>
                </select>
                <span class="material-icons custom-arrow">arrow_drop_down</span>
              </div>
              <div className="custom-select">
                <select name="varietyData" onChange={this.handleChange}>
                  <option value="">Variety</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="void">Void</option>
                </select>
                <span class="material-icons custom-arrow">arrow_drop_down</span>
              </div>
              <div className="custom-select">
                <select name="quantityData" onChange={this.handleChange}>
                  <option value="">Quantity</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="void">Void</option>
                </select>
                <span class="material-icons custom-arrow">arrow_drop_down</span>
              </div>
            </div>
            <button className="add-button">Add</button>
          </div>
          <div className="items-container">
            <label className="total">
              Total <span className="total-price">$ 600</span>
            </label>
            <div className="scrollable">
              {this.state.itemsList.map((item, index) => (
                <div key={index} className="item-desc-holder">
                  <div className="vertical-flex">
                    <label className="item-text">{item[0]}</label>
                    <label className="item-text">{item[1]}</label>
                    <label className="item-text">{item[2]}</label>
                  </div>
                  <div className="buttons-holder">
                    <span className="material-icons icon">edit_note</span>
                    <span className="material-icons icon">delete_forever</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </>
    );
  }
}
