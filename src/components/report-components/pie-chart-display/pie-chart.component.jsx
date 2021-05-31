import React from "react";

import { PieChart } from "@opd/g2plot-react";

import "./pie-chart.styles.scss";

const PieChartDisplay = (props) => {
  const config = {
    appendPadding: 10,
    height: 412,
    data: [
      { type: "Abebe", value: 27 },
      { type: "Belete", value: 25 },
      { type: "Chaltu", value: 18 },
      { type: "Debebe", value: 15 },
      { type: "Etete", value: 10 },
      { type: "Feleke", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [{ type: "pie-legend-active" }, { type: "element-active" }],
  };

  const bothGenderGraph = (
    <div className="graph-container">
      <PieChart {...config} />
    </div>
  );

  const genderSeparatedGraph = (
    <div className="graph-container">
      <h1 className="graph-title">Male</h1>
      <PieChart {...config} />
      <h1 className="graph-title">Female</h1>
      <PieChart {...config} />
    </div>
  );

  return (
    <div className="pie-chart-container">
      {props.gender ? genderSeparatedGraph : bothGenderGraph}
    </div>
  );
};

export default PieChartDisplay;
