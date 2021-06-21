import React, { Component } from "react";

import TableDisplay from "../../table-display/table-display.component";
import ColumnChartDisplay from "../column-chart-display/column-chart.component";
import PieChartDisplay from "../pie-chart-display/pie-chart.component";

import "./locationAndTransaction.styles.scss";

export default class LocationAndTransaction extends Component {
  state = {
    transaction: this.props.transaction,
    yearData: "",
    monthData: "",
    locationData: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="content-title">
          <h1 className="title">Reports</h1>
          <h2 className="subtitle">Location</h2>
        </div>
        <div className="scrollable">
          <div className="lat-content-detail-container">
            <div className="export-container">
              <div className="input-group">
                <div className="input-holder">
                  <span className="input-label">Year</span>
                  <input
                    className="text-input"
                    type="text"
                    inputMode="numeric"
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
              </div>
              <button className="export-button">
                <img src="https://img.icons8.com/color/36/000000/ms-excel.png" />
                Export to CSV
              </button>
            </div>
            {this.state.transaction ? (
              <ColumnChartDisplay
                titleNormal="Location to Transaction"
                titleGrouped="Location to Transaction"
                gender={this.state.gender}
              />
            ) : (
              <ColumnChartDisplay
                titleNormal="Location to Client"
                titleGrouped="Location to Client"
                gender={this.state.gender}
              />
            )}
            <PieChartDisplay gender={this.state.gender} />
            <div className="table-control-container">
              <div className="input-holder">
                <input
                  className="text-input"
                  type="text"
                  name="location"
                  value={this.state.locationData}
                  onChange={this.handleChange}
                  placeholder="Search by location"
                />
              </div>
            </div>
            <TableDisplay />
          </div>
        </div>
      </>
    );
  }
}
