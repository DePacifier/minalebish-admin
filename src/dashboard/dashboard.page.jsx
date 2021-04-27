import "./dashboard.styles.scss";

import React, { Component } from "react";
import Navigation from "../components/navigation/navigation.component";
import TotalDisplay from "../components/total-display/total-display.component";
import TopDisplay from "../components/top-display/top-display.component";
import GraphDisplay from "../components/graph-display/graph-display.component";

export default class Dashboard extends Component {
  state = {};

  graphData1 = [
    {
      type: "Jan",
      sales: 35,
    },
    {
      type: "Feb",
      sales: 50,
    },
    {
      type: "Mar",
      sales: 73,
    },
    {
      type: "Apr",
      sales: 27,
    },
    {
      type: "May",
      sales: 50,
    },
    {
      type: "Jun",
      sales: 27,
    },
    {
      type: "Jul",
      sales: 60,
    },
    {
      type: "Aug",
      sales: 24,
    },
    {
      type: "Sep",
      sales: 30,
    },
    {
      type: "Oct",
      sales: 24,
    },
    {
      type: "Nov",
      sales: 60,
    },
    {
      type: "Dec",
      sales: 35,
    },
  ];

  graphData2 = [
    {
      type: "Mon",
      sales: 5,
    },
    {
      type: "Tue",
      sales: 10,
    },
    {
      type: "Wed",
      sales: 20,
    },
    {
      type: "Thu",
      sales: 7,
    },
    {
      type: "Fri",
      sales: 14,
    },
    {
      type: "Sat",
      sales: 6,
    },
    {
      type: "Sun",
      sales: 7,
    },
  ];

  render() {
    return (
      <div className="grid-container">
        <div className="grid-item nav">
          <Navigation />
        </div>
        <div className="grid-item header">
          <div className="details">
            <h1 className="title">Jon Dow</h1>
            <h2 className="subtitle">Admin</h2>
          </div>
          <div className="image">JD</div>
        </div>
        <div className="grid-item main">
          <h1 className="title">Dashboard</h1>
          <h2 className="subtitle">Home</h2>
          <div className="main-flex-dash-container">
            <div className="total-display-container">
              <TotalDisplay
                title="Total Sells"
                value="$ 60,000"
                timeFrame="2010-2021"
              />
              <TotalDisplay
                title="Total Sells"
                value="$ 60,000"
                timeFrame="2010-2021"
              />
              <TotalDisplay
                title="Total Sells"
                value="$ 60,000"
                timeFrame="2010-2021"
              />
              <TotalDisplay
                title="Total Sells"
                value="$ 60,000"
                timeFrame="Today"
              />
              <TotalDisplay
                title="Total Sells"
                value="$ 60,000"
                timeFrame="Today"
              />
              <TotalDisplay
                title="Total Sells"
                value="$ 60,000"
                timeFrame="Today"
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
            <div className="graph-display-container">
              <div className="box graph1">
                <h1>Transaction to Time</h1>
                <GraphDisplay config={this.graphData1} />
              </div>
              <div className="box graph2">
                <h1>Customer per time</h1>
                <h2>Daily Average</h2>
                <GraphDisplay config={this.graphData2} />
              </div>
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
    );
  }
}
