import "./top-display.styles.scss";
import React from "react";

const TopDisplay = (props) => {
  return (
    <div className="top-card">
      <div className="title">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
      <div className="data-container one">
        <div className="icon-holder">#{props.data[0].num}</div>
        <div className="details">
          <h1>{props.data[0].name}</h1>
          <h2>Name</h2>
        </div>
        <div className="details">
          <h1>{props.data[0].amount} kg</h1>
          <h2>Amount</h2>
        </div>
        <div className="details">
          <h1>{props.data[0].price}</h1>
          <h2>Price</h2>
        </div>
      </div>
      <div className="data-container two">
        <div className="icon-holder">#{props.data[1].num}</div>
        <div className="details">
          <h1>{props.data[1].name}</h1>
          <h2>Name</h2>
        </div>
        <div className="details">
          <h1>{props.data[1].amount} kg</h1>
          <h2>Amount</h2>
        </div>
        <div className="details">
          <h1>{props.data[1].price}</h1>
          <h2>Price</h2>
        </div>
      </div>
      <div className="data-container three">
        <div className="icon-holder">#{props.data[2].num}</div>
        <div className="details">
          <h1>{props.data[2].name}</h1>
          <h2>Name</h2>
        </div>
        <div className="details">
          <h1>{props.data[2].amount} kg</h1>
          <h2>Amount</h2>
        </div>
        <div className="details">
          <h1>{props.data[2].price}</h1>
          <h2>Price</h2>
        </div>
      </div>
    </div>
  );
};

export default TopDisplay;
