import React, { Component } from "react";

import TableDisplay from "../../table-display/table-display.component";
import ColumnChartDisplay from "../column-chart-display/column-chart.component";
import PieChartDisplay from "../pie-chart-display/pie-chart.component";

import "./purchasedAndTransaction.styles.scss";

export default class PurchasedAndTransaction extends Component {
  state = {
    transaction: this.props.transaction,
    yearData: "",
    monthData: "",
    searchFieldData: "",
    transactionMinData: "",
    transactionMaxData: "",
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
          {this.state.transaction ? (
            <h2 className="subtitle">Transaction</h2>
          ) : (
            <h2 className="subtitle">Purchased Item</h2>
          )}
        </div>
        <div className="pat-content-detail-container">
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
              {this.state.transaction ? (
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
              ) : (
                ""
              )}
            </div>
            <button className="export-button">
              <img src="https://img.icons8.com/color/36/000000/ms-excel.png" />
              Export to CSV
            </button>
          </div>
          {this.state.transaction ? (
            <ColumnChartDisplay titleNormal="Transaction to Time" />
          ) : (
            <ColumnChartDisplay titleNormal="Item to Transaction" />
          )}
          <PieChartDisplay gender={this.state.gender} />
          {this.state.transaction ? (
            ""
          ) : (
            <div className="table-control-container">
              <div className="input-holder">
                <input
                  className="text-input"
                  type="text"
                  name="searchFieldData"
                  value={this.state.searchFieldData}
                  onChange={this.handleChange}
                  placeholder="Search by any field"
                />
              </div>
              <div className="input-holder last">
                <span className="input-label">Transaction</span>
                <input
                  className="text-input"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  name="transactionMinData"
                  value={this.state.transactionMinData}
                  onChange={this.handleChange}
                  placeholder="200"
                />
                <span className="separator">-</span>
                <input
                  className="text-input input-range"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  name="transactionMaxData"
                  value={this.state.transactionMaxData}
                  onChange={this.handleChange}
                  placeholder="600"
                />
              </div>
            </div>
          )}

          <TableDisplay />
        </div>
      </>
    );
  }
}
