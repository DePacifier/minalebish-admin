import "./dashboard.styles.scss";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/navigation.component";
import TotalDisplay from "../../components/total-display/total-display.component";
import TopDisplay from "../../components/top-display/top-display.component";
import TableDisplay from "../../components/table-display/table-display.component";

export default class Dashboard extends Component {
  state = {
    miniVersion: false,
    tableItemsDataList: [
      ["25 Dec 2021", "John Deivce", "Doro, Barley, Leaf Tea, Brookly ..."],
      ["25 Dec 2021", "John Deivce", "Doro, Barley, Leaf Tea, Brookly ..."],
      ["25 Dec 2021", "John Deivce", "Doro, Barley, Leaf Tea, Brookly ..."],
      ["25 Dec 2021", "John Deivce", "Doro, Barley, Leaf Tea, Brookly ..."],
    ],
  };

  render() {
    return (
      <div
        className={`grid-container ${
          this.props.miniVersion ? "mini-grid-version" : ""
        }`}
      >
        <div className="grid-item nav">
          <Navigation
            showLabels={!this.props.miniVersion}
            activeTab="dashboard"
          />
        </div>
        <div className="grid-item header">
          <div
            className="change-view-button"
            onClick={this.props.handleChangeView}
          >
            <span className="material-icons-outlined customBurg">menu</span>
          </div>
          <div className="identity-container">
            <div className="image">JD</div>
            <div className="details">
              <h1 className="title">Jon Dow</h1>
              <h2 className="subtitle">Admin</h2>
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-icon">
                <span className="material-icons-outlined">arrow_drop_down</span>
              </div>
              <div className="options-list">
                <Link
                  className="option"
                  to={{
                    pathname: "profile",
                    props: { showProfile: true },
                  }}
                >
                  Profile
                </Link>
                <Link
                  className="option"
                  to={{
                    pathname: "profile",
                    props: { showProfile: false },
                  }}
                >
                  Change password
                </Link>
                <Link
                  to=""
                  className="option"
                  onClick={(event) => {
                    this.props.handleLogOut(event);
                  }}
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item main">
          <div className="content-title">
            <h1 className="title">Dashboard</h1>
            <h2 className="subtitle">Home</h2>
          </div>
          <div className="scrollable big">
            <div className="main-flex-dash-container">
              <div className="total-display-container">
                <TotalDisplay
                  title="Today's Sales"
                  value="$ 60,000"
                  timeFrame="Yeseterday"
                  image="sales"
                />
                <TotalDisplay
                  title="Total Product Sold"
                  value="450"
                  timeFrame="Yeseterday"
                  image="products"
                />
                <TotalDisplay
                  title="Total Customers"
                  value="200"
                  timeFrame="Yeseterday"
                  image="customers"
                />
                <TotalDisplay
                  title="Today's Sells"
                  value="$ 60,000"
                  timeFrame="Today"
                  image="sales"
                />
                <TotalDisplay
                  title="Total Product Sold"
                  value="450"
                  timeFrame="Today"
                  image="products"
                />
                <TotalDisplay
                  title="Total Customers"
                  value="200"
                  timeFrame="Today"
                  image="customers"
                />
              </div>

              <TopDisplay
                title="Top Products"
                subtitle="Jan, 2021"
                data={[
                  { num: 1, name: "Selit", amount: "650", price: "$ 6,540" },
                  { num: 2, name: "Selit", amount: "650", price: "$ 6,540" },
                  { num: 3, name: "Selit", amount: "650", price: "$ 6,540" },
                ]}
              />
            </div>
            <div className="main-flex-dash-container last">
              <div className="table-container">
                <span className="table-title">Void Transactions</span>
                <table className="fixed-header">
                  <thead>
                    <tr className="table-header">
                      <th className="first">Date</th>
                      <th>Customer Name</th>
                      <th>Item Names</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableItemsDataList.map((item, index) => (
                      <tr key={index}>
                        <td className="first">{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <TopDisplay
                title="Top Products"
                subtitle="this week"
                data={[
                  { num: 1, name: "Selit", amount: "650", price: "$ 6,540" },
                  { num: 2, name: "Selit", amount: "650", price: "$ 6,540" },
                  { num: 3, name: "Selit", amount: "650", price: "$ 6,540" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
