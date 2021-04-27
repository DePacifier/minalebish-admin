import "./graph-display.styles.scss";
import React from "react";
import { ColumnChart, ColumnChartProps } from "@opd/g2plot-react";

const GraphDisplay = (props) => {
  const config: ColumnChartProps = {
    xField: "type",
    yField: "sales",
    data: props.config,
    height: 200,
    autoFit: true,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
        style: {
          fontWeight: 800,
          opacity: 1,
          fill: "black",
        },
      },
    },
    yAxis: {
      grid: {
        line: {
          style: {
            lineWidth: 0,
          },
        },
      },
      label: {
        style: {
          fontWeight: 800,
          opacity: 1,
          fill: "black",
        },
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
    columnWidthRatio: 1,
  };

  return <ColumnChart {...config} />;
};

export default GraphDisplay;
