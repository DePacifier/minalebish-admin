import React, { Component } from "react";

import "./customer-list-modal.styles.scss";

export default class CustomerListModal extends Component {
  state = {
    firstNameData: "",
    middleNameData: "",
    lastNameData: "",
    emailData: "",
    instagramLinkData: "",
    mailAddressData: "",
    phoneNumberData: "",
    phoneNumbersList: ["+251 933 201742", "+251 961 259847", "+251 911 052098"],
    countryData: "",
    zipcodeData: "",
    stateData: "",
    cityData: "",
    streetData: "",
    houseNumberData: "",
    addressList: [
      ["Ethiopia", "1000", "Addis Ababa", "Addis Ababa", "Mexico Road", "New"],
    ],
    showEdit: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeModal = (event) => {
    event.stopPropagation();
    this.props.closeModal();
  };

  handleShowEditChange = (value) => {
    this.setState({ showEdit: value });
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
      this.state.countryData,
      this.state.zipcodeData,
      this.state.stateData,
      this.state.cityData,
      this.state.streetData,
      this.state.houseNumberData,
    ];
    this.setState((prevState) => ({
      addressList: [newAddress, ...prevState.addressList],
      countryData: "",
      zipcodeData: "",
      stateData: "",
      cityData: "",
      streetData: "",
      houseNumberData: "",
    }));
  };

  handleRemoveAddress = (addressIndex) => {
    const changedAddressList = this.state.addressList.filter(
      (address, index) => index !== addressIndex
    );

    this.setState({
      addressList: changedAddressList,
    });
  };

  render() {
    const editView = (
      <form>
        <div className="input-group">
          <h2>Info</h2>
          <h3>Basic Customer information</h3>
          <input
            className="text-field"
            type="text"
            name="firstNameData"
            placeholder="First Name"
            value={this.state.firstNameData}
            onChange={this.handleChange}
          />
          <input
            className="text-field"
            type="text"
            name="middleNameData"
            placeholder="Middle Name"
            value={this.state.middleNameData}
            onChange={this.handleChange}
          />
          <input
            className="text-field"
            type="text"
            name="lastNameData"
            placeholder="Last Name"
            value={this.state.lastNameData}
            onChange={this.handleChange}
          />
          <h2>Contact</h2>
          <h3>Contact information</h3>
          <input
            className="text-field"
            type="email"
            name="emailData"
            placeholder="Email"
            value={this.state.emailData}
            onChange={this.handleChange}
          />
          <input
            className="text-field"
            type="text"
            name="instagramLinkData"
            placeholder="Instagram Address"
            value={this.state.instagramLinkData}
            onChange={this.handleChange}
          />
          <input
            className="text-field"
            type="text"
            name="mailAddressData"
            placeholder="Mail Address"
            value={this.state.mailAddressData}
            onChange={this.handleChange}
          />
          <div className="add-input">
            <input
              className="text-field"
              type="text"
              name="phoneNumberData"
              placeholder="Phone Number"
              value={this.state.phoneNumberData}
              onChange={this.handleChange}
            />
            <span
              className="material-icons custom-add"
              onClick={this.handleAddPhoneNumber}
            >
              add_circle
            </span>
          </div>
          {this.state.phoneNumbersList.length <= 0 ? (
            ""
          ) : (
            <div className="flex-column">
              {this.state.phoneNumbersList.map((phoneNumber, index) => (
                <div className="phone-holder">
                  <input
                    key={index}
                    type="text"
                    disabled={true}
                    value={phoneNumber}
                  />
                  <span
                    className="material-icons custom-remove"
                    onClick={() => this.handleRemovePhoneNumber(phoneNumber)}
                  >
                    cancel
                  </span>
                </div>
              ))}
            </div>
          )}
          <h2>Address</h2>
          <h3>Basic Address information</h3>
          <div className="address-create-container">
            <div className="custom-select">
              <select name="countryData" onChange={this.handleChange}>
                <option value="" selected disabled hidden>
                  Country
                </option>
                <option value="ETH">Ethiopia</option>
                <option value="US">USA</option>
              </select>
              <span className="material-icons custom-arrow">
                arrow_drop_down
              </span>
            </div>
            <input
              className="num-field"
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              name="zipcodeData"
              placeholder="Zip Code"
              value={this.state.zipcodeData}
              onChange={this.handleChange}
            />
            <div className="custom-select">
              <select name="stateData" onChange={this.handleChange}>
                <option value="">State</option>
                <option value="AA">Addis Ababa</option>
                <option value="DD">Dire Dawa</option>
              </select>
              <span class="material-icons custom-arrow">arrow_drop_down</span>
            </div>
            <div className="custom-select">
              <select name="cityData" onChange={this.handleChange}>
                <option value="">City</option>
                <option value="AA">Addis Ababa</option>
                <option value="DD">Dire Dawa</option>
              </select>
              <span class="material-icons custom-arrow">arrow_drop_down</span>
            </div>
            <input
              className="text-field"
              type="text"
              name="streetData"
              placeholder="Street"
              value={this.state.streetData}
              onChange={this.handleChange}
            />
            <input
              className="num-field"
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              name="houseNumberData"
              placeholder="House Number"
              value={this.state.houseNumberData}
              onChange={this.handleChange}
            />
            <div className="btn-container">
              <button
                className="add-address-button"
                onClick={this.handleAddNewAddress}
              >
                Add
              </button>
            </div>
          </div>
          {this.state.addressList.map((address, index) => (
            <div className="address-create-container">
              <div className="close-button-container">
                <span
                  className="material-icons remove-icon"
                  onClick={() => this.handleRemoveAddress(index)}
                >
                  cancel
                </span>
              </div>
              <div className="custom-select">
                <select disabled>
                  <option value="">{address[0]}</option>
                </select>
                <span className="material-icons custom-arrow">
                  arrow_drop_down
                </span>
              </div>
              <input className="num-field" disabled value={address[1]} />
              <div className="custom-select">
                <select disabled>
                  <option value="">{address[2]}</option>
                </select>
                <span class="material-icons custom-arrow">arrow_drop_down</span>
              </div>
              <div className="custom-select">
                <select disabled>
                  <option value="">{address[3]}</option>
                </select>
                <span class="material-icons custom-arrow">arrow_drop_down</span>
              </div>
              <input className="text-field" disabled value={address[4]} />
              <input className="num-field" disabled value={address[5]} />
            </div>
          ))}
        </div>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    );

    const listView = (
      <div className="list-view-container">
        <div className="detail-container">
          <div className="display-group">
            <span className="label-text">Name</span>
            <p className="content-text">Johnny Carpenter</p>
          </div>
          <div className="display-group">
            <span className="label-text">Grading</span>
            <p className="content-text">icon</p>
          </div>
          <div className="display-group">
            <span className="label-text">Email</span>
            <p className="content-text">EyobYirgu@gmail.com</p>
          </div>
          <div className="display-group">
            <span className="label-text">Instagram Link</span>
            <p className="content-text">https://instagram/hellomama</p>
          </div>
          <div className="display-group">
            <span className="label-text">Date of Birth</span>
            <p className="content-text">1997</p>
          </div>
          <div className="display-group">
            <span className="label-text">Age</span>
            <p className="content-text">856</p>
          </div>
          <div className="display-group">
            <span className="label-text">Mail Address</span>
            <p className="content-text">Johnny Carpenter</p>
          </div>
          <div className="display-group">
            <span className="label-text">Phone</span>
            {this.state.phoneNumbersList.map((phoneNumber) => (
              <p className="content-text phone">{phoneNumber}</p>
            ))}
          </div>
          <div className="display-group">
            <span className="label-text">House Number</span>
            <p className="content-text">756</p>
          </div>
          <div className="display-group">
            <span className="label-text">Street</span>
            <p className="content-text">Barben</p>
          </div>
          <div className="display-group">
            <span className="label-text">City</span>
            <p className="content-text">Boston</p>
          </div>
          <div className="display-group">
            <span className="label-text">State</span>
            <p className="content-text">Masacheusetts</p>
          </div>
          <div className="display-group">
            <span className="label-text">Zip Code</span>
            <p className="content-text">756</p>
          </div>
          <div className="display-group">
            <span className="label-text">Country</span>
            <p className="content-text">US</p>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="edit-button flexy"
            onClick={() => this.handleShowEditChange(true)}
          >
            <span class="material-icons">edit_note</span>
            <span class="text"> Edit</span>
          </button>
          <button className="suspend-button flexy" onClick={this.closeModal}>
            <span class="material-icons">delete_forever</span>
            <span class="text"> Delete</span>
          </button>
        </div>
      </div>
    );

    return (
      <div className="customer-list-modal" onClick={this.closeModal}>
        <div className="modal-content-container">
          <div className="close-button">
            <span className="close" onClick={this.closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-detail">
              <span class="material-icons icon">groups</span>
              <h1>Customers</h1>
              {this.state.showEdit ? editView : listView}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
