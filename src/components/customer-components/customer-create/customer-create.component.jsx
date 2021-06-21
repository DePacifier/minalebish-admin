import React, { Component } from "react";

import "./customer-create.styles.scss";

export default class CustomerCreate extends Component {
  state = {
    firstNameData: "",
    middleNameData: "",
    lastNameData: "",
    dateOfBirthData: "",
    emailData: "",
    instagramLinkData: "",
    phoneNumberData: "",
    phoneNumbersList: ["+251 911 052098", "+251 933 201742"],
    mailAddress: "",
    countryData: "",
    zipCodeData: "",
    stateData: "",
    cityData: "",
    streetData: "",
    houseNumberData: "",
    canAddAddress: false,
    addressLabelData: [
      "Country",
      "State",
      "City",
      "Street",
      "House Number",
      "Zip Code",
    ],
    addressListData: [
      ["USA", "Massachusetts", "Boston", "Omedla", 478, 1655],
      ["USA", "Massachusetts", "Boston", "Omedla", 478, 1655],
      ["USA", "Massachusetts", "Boston", "Omedla", 478, 1655],
    ],
    remarkData: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleToTypeDate = (event) => {
    console.log(event);
    event.target.type = "date";
  };

  handleToTypeText = (event) => {
    console.log(event);
    event.target.type = "text";
  };

  handleAddPhoneNumber = () => {
    const newPhoneNumber = this.state.phoneNumberData;
    this.setState((prevState) => ({
      phoneNumberData: "",
      phoneNumbersList: [newPhoneNumber, ...prevState.phoneNumbersList],
    }));
  };

  handleRemovePhoneNumber = (phoneNumber) => {
    const modifiedPhoneNumberList = this.state.phoneNumbersList.filter(
      (phone) => phone !== phoneNumber
    );
    this.setState({
      phoneNumbersList: modifiedPhoneNumberList,
    });
  };

  handleAddNewAddress = (event) => {
    event.preventDefault();
    const newAddress = [
      [
        this.state.countryData,
        this.state.zipCodeData,
        this.state.stateData,
        this.state.cityData,
        this.state.streetData,
        this.state.houseNumberData,
      ],
    ];
    this.setState((prevState) => ({
      addressListData: [...newAddress, ...prevState.addressListData],
    }));
  };

  handleRemoveAddress = (addressIndex) => {
    const modifiedAddressList = this.state.addressListData.filter(
      (address, index) => index !== addressIndex
    );
    this.setState({
      addressListData: modifiedAddressList,
    });
  };

  render() {
    return (
      <>
        <div className="content-title" onClick={this.selectModal}>
          <h1 className="title">Customer</h1>
          <h2 className="subtitle">Create</h2>
        </div>
        <div className="customer-create-container">
          <form className="input-form">
            <div className="input-holder">
              <h4>Info</h4>
              <h5>Basic customer information</h5>
              <div className="inputs-flex-horizontal spacing">
                <input
                  type="text"
                  className="text-field"
                  name="firstNameData"
                  onChange={this.handleChange}
                  value={this.state.firstNameData}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="text-field"
                  name="MiddleNameData"
                  onChange={this.handleChange}
                  value={this.state.middleNameData}
                  placeholder="Middle Name"
                />
              </div>
              <div className="inputs-flex-horizontal">
                <input
                  type="text"
                  className="text-field"
                  name="lastNameData"
                  onChange={this.handleChange}
                  value={this.state.lastNameData}
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  onFocus={this.handleToTypeDate}
                  onBlur={this.handleToTypeText}
                  className="text-field"
                  name="dateOfBirth"
                  onChange={this.handleChange}
                  placeholder="Date of Birth"
                />
              </div>
            </div>
            <div className="input-holder">
              <h4>Contact</h4>
              <h5>Contact information</h5>
              <div className="inputs-flex-horizontal spacing">
                <input
                  type="email"
                  className="text-field"
                  name="emailData"
                  onChange={this.handleChange}
                  value={this.state.emailData}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="text-field"
                  name="instagramLinkData"
                  onChange={this.handleChange}
                  value={this.state.instagramLinkData}
                  placeholder="Instagram Address"
                />
              </div>
              <div className="inputs-flex-horizontal">
                <div className="phone-field-holder">
                  <input
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    className="text-field"
                    name="phoneNumberData"
                    onChange={this.handleChange}
                    value={this.state.phoneNumberData}
                    placeholder="Phone Number"
                  />
                  <span
                    className="material-icons add-icon"
                    onClick={this.handleAddPhoneNumber}
                  >
                    add_circle
                  </span>
                </div>
                <input
                  type="text"
                  className="text-field"
                  name="mailAddressData"
                  onChange={this.handleChange}
                  value={this.state.mailAddressData}
                  placeholder="Mail Address"
                />
              </div>
              <div className="phone-flex-column">
                {this.state.phoneNumbersList.map((phone) => (
                  <div className="phone-container">
                    <input value={phone} disabled />
                    <span
                      className="material-icons remove-icon"
                      onClick={() => this.handleRemovePhoneNumber(phone)}
                    >
                      cancel
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-holder">
              <h4>Address</h4>
              <h5>Basic address information</h5>
              <div className="inputs-flex-horizontal spacing">
                <div className="custom-select">
                  <select
                    className="text-field"
                    name="countryData"
                    onChange={this.handleChange}
                  >
                    <option value="">Country</option>
                    <option value="ETH">Ethiopia</option>
                    <option value="US">USA</option>
                  </select>
                  <span className="material-icons custom-arrow">
                    arrow_drop_down
                  </span>
                </div>
                <input
                  type="text"
                  className="text-field"
                  name="zipCodeData"
                  onChange={this.handleChange}
                  value={this.state.zipCodeData}
                  placeholder="Zip Code"
                />
              </div>
              <div className="inputs-flex-horizontal spacing">
                <div className="custom-select">
                  <select
                    className="text-field"
                    name="stateData"
                    onChange={this.handleChange}
                  >
                    <option value="">State</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Dire Dawa">Dire Dawa</option>
                  </select>
                  <span className="material-icons custom-arrow">
                    arrow_drop_down
                  </span>
                </div>
                <div className="custom-select">
                  <select
                    className="text-field"
                    name="cityData"
                    onChange={this.handleChange}
                  >
                    <option value="">City</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Dire Dawa">Dire Dawa</option>
                  </select>
                  <span className="material-icons custom-arrow">
                    arrow_drop_down
                  </span>
                </div>
              </div>
              <div className="inputs-flex-horizontal spacing">
                <input
                  type="text"
                  className="text-field"
                  name="streetData"
                  onChange={this.handleChange}
                  value={this.state.streetData}
                  placeholder="Street"
                />
                <input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  className="text-field"
                  name="houseNumberData"
                  onChange={this.handleChange}
                  value={this.state.houseNumberData}
                  placeholder="House Number"
                />
              </div>
              <div className="add-button-container">
                <button
                  className={`${this.state.canAddAddress ? "add-notify" : ""}`}
                  onClick={this.handleAddNewAddress}
                >
                  Add
                </button>
              </div>
              <div className="added-address-container">
                {this.state.addressListData.map((address, addressIndex) => (
                  <div className="address-container">
                    {address.map((value, index) => (
                      <div className="content-holder">
                        <span className="header-label">
                          {this.state.addressLabelData[index]}
                        </span>
                        <h1>{value}</h1>
                      </div>
                    ))}
                    <span
                      className="material-icons remove-icon"
                      onClick={() => this.handleRemoveAddress(addressIndex)}
                    >
                      cancel
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-holder">
              <h4>Extra Info</h4>
              <h5>Extra information about the Customer</h5>
              <textarea
                placeholder="Remark"
                name="remarkData"
                onChange={this.handleChange}
                value={this.state.remarkData}
              />
            </div>
            <input className="submit-button" type="submit" value="Submit" />
          </form>
        </div>
      </>
    );
  }
}
