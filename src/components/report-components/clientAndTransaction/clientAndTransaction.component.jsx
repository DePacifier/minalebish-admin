import React, { Component } from "react";

import TableDisplay from "../../table-display/table-display.component";
import ColumnChartDisplay from "../column-chart-display/column-chart.component";
import PieChartDisplay from "../pie-chart-display/pie-chart.component";

import "./clientAndTransaction.styles.scss";

export default class ClientAndTransaction extends Component {
  state = {
    transaction: this.props.transaction,
    gender: false,
    yearData: "",
    monthData: "",
    startAgeData: "",
    ageIntervalData: "",
    minClientData: "",
    maxClientData: "",
    genderData: "",
  };

  handleGenderChange = () => {
    this.setState((prevState) => ({ gender: !prevState.gender }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="content-title">
          <h1 className="title">Notification</h1>
          <h2 className="subtitle">Create</h2>
        </div>
        <div className="content-detail-container">
          <div className="export-container">
            <div className="input-group">
              <div className="input-holder">
                <span className="input-label">Year</span>
                <input
                  className="text-input"
                  type="text"
                  inputmode="numeric"
                  pattern="20[2-9][0-9]"
                  required
                  name="yearData"
                  value={this.state.yearData}
                  onChange={this.handleChange}
                  placeholder="2021"
                />
              </div>
              <div className="input-holder">
                <span className="input-label">Month</span>
                <input
                  className="text-input"
                  type="month"
                  name="monthData"
                  value={this.state.monthData}
                  onChange={this.handleChange}
                  placeholder="June"
                  required
                />
              </div>
              <div className="input-holder">
                <span className="input-label">Gender</span>
                <label className="toggle">
                  <input
                    type="checkbox"
                    className="toggle-input"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleGenderChange}
                  />
                  <div className="toggle-bar">
                    <div className="toggle-spin"></div>
                  </div>
                </label>
              </div>
            </div>
            <button className="export-button">
              <img src="https://img.icons8.com/color/36/000000/ms-excel.png" />
              Export to CSV
            </button>
          </div>
          <ColumnChartDisplay />
          <PieChartDisplay />
          <div className="table-control-container">
            <div className="input-holder">
              <span className="input-label">Age</span>
              <input
                className="text-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9][0-9]"
                name="startAgeData"
                value={this.state.startAgeData}
                onChange={this.handleChange}
                placeholder="Start Age"
              />
              <input
                className="text-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9][0-9]"
                name="ageIntervalData"
                value={this.state.ageIntervalData}
                onChange={this.handleChange}
                placeholder="Interval"
              />
            </div>
            <div className="input-holder">
              <span className="input-label">Clients</span>
              <input
                className="text-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                name="minClientData"
                value={this.state.minClientData}
                onChange={this.handleChange}
                placeholder="200"
              />
              <span>-</span>
              <input
                className="text-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                name="maxClientData"
                value={this.state.maxClientData}
                onChange={this.handleChange}
                placeholder="600"
              />
            </div>
            <div className="input-holder">
              <span className="input-label">Gender</span>
              <div className="custom-select">
                <select
                  name="genderData"
                  value={this.state.genderData}
                  onChange={this.handleChange}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <span class="material-icons custom-arrow">arrow_drop_down</span>
              </div>
            </div>
          </div>
          <TableDisplay />
        </div>
      </>
    );
  }
}
