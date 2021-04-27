import "./total-display.styles.scss";
import React from "react";

const TotalDisplay = (props) => {
  return (
    <div className="total-card">
      <div className="details">
        <h2>{props.title}</h2>
        <h1>{props.value}</h1>
        <h3>{props.timeFrame}</h3>
      </div>
      <div className="image-holder">
        <div className="image">
          <span class="material-icons-outlined">widgets</span>
        </div>
      </div>
    </div>
  );
};

export default TotalDisplay;
