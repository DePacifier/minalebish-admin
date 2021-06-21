import React, { Component } from "react";

import "./grading-create.styles.scss";

const colorList = [
  [213, 0, 0],
  [197, 17, 98],
  [170, 0, 255],
  [98, 0, 234],
  [48, 79, 254],
  [0, 145, 234],
  [0, 184, 212],
  [0, 188, 185],
  [0, 200, 83],
  [100, 221, 23],
  [174, 234, 0],
  [255, 214, 0],
  [255, 171, 0],
  [255, 109, 0],
  [221, 44, 0],
  [62, 39, 35],
  [33, 33, 33],
  [38, 50, 56],
];

const rgbaToHex = (color) => {
  const rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
  const hex = `#${(
    (1 << 24) +
    (parseInt(rgba[0]) << 16) +
    (parseInt(rgba[1]) << 8) +
    parseInt(rgba[2])
  )
    .toString(16)
    .slice(1)}`;

  return hex;
};

export default class GradingCreate extends Component {
  state = {
    titleData: "",
    transactionStartData: "",
    transactionEndData: "",
    badgeColorData: "",
  };

  handleColorClick = (rgbaColor) => {
    const hexValue = rgbaToHex(rgbaColor);
    this.setState({
      badgeColorData: hexValue,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <div className="grading-content-title">
          <h1 className="title">Grading</h1>
          <h2 className="subtitle">Create</h2>
        </div>
        <div className="grading-create-container">
          <form className="input-form">
            <div className="inputs-holder-box">
              <h4>Info</h4>
              <h5>Basic Grading Information</h5>
              <input
                className="text-field"
                type="text"
                placeholder="Title"
                name="titleData"
                value={this.state.titleData}
                onChange={this.handleChange}
              />
              <div>
                <h4 className="h4-start">Transaction Amount</h4>
                <input
                  className="num-field"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  placeholder="Starting"
                  name="transactionStartData"
                  value={this.state.transactionStartData}
                  onChange={this.handleChange}
                />
                <span> to </span>
                <input
                  className="num-field"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  placeholder="End"
                  name="transactionEndData"
                  value={this.state.transactionEndData}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="inputs-holder-box">
              <h4>Color</h4>
              <h5>Badge Color</h5>
              <div className="color-selector-container">
                <div className="color-container">
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 1)`;
                      return (
                        <div
                          key={index + 100}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 0.9)`;
                      return (
                        <div
                          key={index + 200}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 0.8)`;
                      return (
                        <div
                          key={index + 300}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 0.7)`;
                      return (
                        <div
                          key={index + 400}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 0.6)`;
                      return (
                        <div
                          key={index + 500}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 0.5)`;
                      return (
                        <div
                          key={index + 100}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 0.4)`;
                      return (
                        <div
                          key={index + 100}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                  <div className="horizontal-flex">
                    {colorList.map((color, index) => {
                      const RGBAcolor = `rgba(${color[0]}, ${color[1]}, ${color[1]}, 0.2)`;
                      return (
                        <div
                          key={index + 100}
                          className="color-palette"
                          style={{
                            backgroundColor: RGBAcolor,
                          }}
                          onClick={() => this.handleColorClick(RGBAcolor)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="selected-container">
                  <span className="label top">Selected</span>
                  <div
                    className="selected-color"
                    style={{
                      backgroundColor: this.state.badgeColorData,
                    }}
                  />
                  <span className="label bottom">
                    {this.state.badgeColorData}
                  </span>
                </div>
              </div>
            </div>
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
