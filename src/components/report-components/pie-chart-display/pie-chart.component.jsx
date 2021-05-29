import React from "react";

import { PieChart } from "@opd/g2plot-react";

import "./pie-chart.styles.scss";

const PieChartDisplay = (props) => {
  const config = {
    appendPadding: 10,
    height: 500,
    data: [
      { type: "a", value: 27 },
      { type: "b", value: 25 },
      { type: "c", value: 18 },
      { type: "d", value: 15 },
      { type: "e", value: 10 },
      { type: "f", value: 5 },
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
  return (
    <div className="pie-chart-container">
      <PieChart {...config} />
    </div>
  );
};

export default PieChartDisplay;
