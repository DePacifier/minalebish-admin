import "./total-display.styles.scss";
import React from "react";

import salesBackground from "../../icons/sales.png";
import productsBackground from "../../icons/products.png";
import customersBackground from "../../icons/customers.png";

const TotalDisplay = (props) => {
  let returnImage;

  if (props.image === "sales") {
    returnImage = salesBackground;
  } else if (props.image === "products") {
    returnImage = productsBackground;
  } else {
    returnImage = customersBackground;
  }

  return (
    <div className="total-card">
      <div className="details">
        <h2>{props.title}</h2>
        <h1>{props.value}</h1>
        <h3>{props.timeFrame}</h3>
      </div>
      <div className="image-holder">
        <div
          className="image"
          style={{ backgroundImage: `url(${returnImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default TotalDisplay;
