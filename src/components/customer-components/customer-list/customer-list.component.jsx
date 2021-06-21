import React, { Component } from "react";
import TableDisplay from "../../table-display/table-display.component";
import CustomerListEditModal from "../customer-list-edit-modal/customer-list-edit-modal.component";
import CustomerListModal from "../customer-list-modal/customer-list-modal.component";

import "./customer-list.styles.scss";

export default class CustomerList extends Component {
  state = {
    displayFilters: false,
    nameData: "",
    startDateData: "",
    endDateData: "",
    gradingData: "",
    modal: false,
    editModal: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFilterClick = () => {
    this.setState((prevState) => ({
      displayFilters: !prevState.displayFilters,
    }));
  };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  selectEditModal = (event) => {
    this.setState({ editModal: !this.state.editModal });
  };

  render() {
    const filters = (
      <div className="filters">
        <h3>Date</h3>
        <input
          className="date-field"
          name="startDateData"
          type="date"
          value={this.state.startDateData}
          onChange={this.handleChange}
        />
        <span> - </span>
        <input
          className="date-field"
          name="endDateData"
          type="date"
          value={this.state.endDateData}
          onChange={this.handleChange}
        />
        <div className="custom-select">
          <select
            name="gradingData"
            value={this.state.gradingData}
            onChange={this.handleChange}
          >
            <option value="">Grading</option>
            <option value="platinum">Platinum</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
          </select>
          <span class="material-icons custom-arrow">arrow_drop_down</span>
        </div>
      </div>
    );

    return (
      <>
        {this.state.modal ? (
          <CustomerListModal closeModal={this.selectModal} />
        ) : (
          ""
        )}
        {this.state.editModal ? (
          <CustomerListEditModal closeModal={this.selectEditModal} />
        ) : (
          ""
        )}
        <div className="content-title">
          <h1 className="title" onClick={this.selectModal}>
            Customer
          </h1>
          <h2 className="subtitle" onClick={this.selectEditModal}>
            List
          </h2>
        </div>
        <div className="customer-list-container">
          <div className="top-input">
            <div className="input-part">
              <input
                className="search-field"
                name="nameData"
                type="text"
                placeholder="Search by Name"
                value={this.state.nameData}
                onChange={this.handleChange}
              />
            </div>
            <div className="buttons">
              <button className="export-button">
                <img src="https://img.icons8.com/color/36/000000/ms-excel.png" />
                Export to CSV
              </button>
              <button
                className={`filter-button ${
                  this.state.displayFilters ? "clicked" : ""
                }`}
                onClick={this.handleFilterClick}
              >
                Filter
              </button>
            </div>
          </div>
          {this.state.displayFilters ? filters : ""}
          <TableDisplay />
        </div>
      </>
    );
  }
}
