import React from "react";

import { ColumnChart } from "@opd/g2plot-react";

import "./column-chart.styles.scss";

const groupdeData = [
  {
    name: "London",
    month: "Jan.",
    value: 18.9,
  },
  {
    name: "London",
    month: "Feb.",
    value: 28.8,
  },
  {
    name: "London",
    month: "Mar.",
    value: 39.3,
  },
  {
    name: "London",
    month: "Apr.",
    value: 81.4,
  },
  {
    name: "London",
    month: "May",
    value: 47,
  },
  {
    name: "London",
    month: "Jun.",
    value: 20.3,
  },
  {
    name: "London",
    month: "Jul.",
    value: 24,
  },
  {
    name: "London",
    month: "Aug.",
    value: 35.6,
  },
  {
    name: "Berlin",
    month: "Jan.",
    value: 12.4,
  },
  {
    name: "Berlin",
    month: "Feb.",
    value: 23.2,
  },
  {
    name: "Berlin",
    month: "Mar.",
    value: 34.5,
  },
  {
    name: "Berlin",
    month: "Apr.",
    value: 99.7,
  },
  {
    name: "Berlin",
    month: "May",
    value: 52.6,
  },
  {
    name: "Berlin",
    month: "Jun.",
    value: 35.5,
  },
  {
    name: "Berlin",
    month: "Jul.",
    value: 37.4,
  },
  {
    name: "Berlin",
    month: "Aug.",
    value: 42.4,
  },
];

const basicData = [
  {
    type: "家具家电",
    sales: 38,
  },
  {
    type: "粮油副食",
    sales: 52,
  },
  {
    type: "生鲜水果",
    sales: 61,
  },
  {
    type: "美容洗护",
    sales: 145,
  },
  {
    type: "母婴用品",
    sales: 48,
  },
  {
    type: "进口食品",
    sales: 38,
  },
  {
    type: "食品饮料",
    sales: 38,
  },
  {
    type: "家庭清洁",
    sales: 38,
  },
];

const ColumnChartDisplay = (props) => {
  const configGrouped = {
    data: groupdeData,
    height: 362,
    isGroup: true,
    xField: "month",
    yField: "value",
    seriesField: "name",
    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],
    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle", // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        { type: "interval-adjust-position" },
        // 数据标签防遮挡
        { type: "interval-hide-overlap" },
        // 数据标签文颜色自动调整
        { type: "adjust-color" },
      ],
    },
  };

  const configNormal = {
    data: basicData,
    heigh: 362,
    xField: "type",
    yField: "sales",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };

  const normalGraph = (
    <div className="chart-container">
      <h1 className="graph-title">{props.titleNormal}</h1>
      <ColumnChart {...configNormal} />
    </div>
  );

  const groupedGraph = (
    <div className="chart-container">
      <h1 className="graph-title">{props.titleGrouped}</h1>
      <ColumnChart {...configGrouped} />
    </div>
  );

  return (
    <div className="column-chart-container">
      {props.gender ? groupedGraph : normalGraph}
    </div>
  );
};

export default ColumnChartDisplay;
