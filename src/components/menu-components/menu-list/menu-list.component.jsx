import React, { Component } from "react";

import "./menu-list.styles.scss";

import TableDisplay from "../../table-display/table-display.component";
import MenuModal from "../menu-modal/menu-modal.component";
import MenuToggle from "../menu-list-toggle/menu-list-toggle.component";

export default class MenuList extends Component {
  state = {
    category: "",
    modal: false,
    tableData: [],
    isLoaded: false,
    fetchFailed: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  selectModal = (event) => {
    this.setState({ modal: !this.state.modal });
  };

  fetchData = () => {
    const axios = this.props.axios;
    axios
      .get("/menu")
      .then((response) => {
        //create the actual table data that will be passed to table display
        let tableData = [["Date", "Name", "Category", " "]];
        let menuList = response.data.data;
        for (let menuIndex in menuList) {
          tableData.push([
            menuList[menuIndex].created_at.slice(0, 10),
            menuList[menuIndex].name,
            menuList[menuIndex].category.name,
            <MenuToggle
              toggleStatus={menuList[menuIndex].is_suspended ? true : false}
              onToggleMethod={this.handleListDataToggle}
              onEditMethod={this.handleEditMethod}
              id={menuList[menuIndex].id}
            />,
          ]);
        }
        this.setState({
          tableData: tableData,
          isLoaded: true,
          fetchFailed: false,
        });
      })
      .catch((error) => {
        this.setState({ fetchFailed: true });
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  handleListDataToggle = (id) => {
    console.log(id);
  };

  handleEditMethod = (id) => {
    console.log(id);
  };

  render() {
    return (
      <>
        {this.state.modal ? (
          <MenuModal
            displayModal={this.state.modal}
            closeModal={this.selectModal}
          />
        ) : (
          ""
        )}
        <div className="content-title" onClick={this.selectModal}>
          <h1 className="title">Menu</h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="menu-list-container">
          <div className="input-holder">
            <div className="custom-select">
              <select
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <option value="">Category</option>
                <option value="Category1">Category1</option>
                <option value="Category2">Category2</option>
              </select>
              <span className="material-icons custom-arrow">
                arrow_drop_down
              </span>
            </div>
          </div>
          {this.state.fetchFailed ? (
            "Couldnt Not Fetch Data"
          ) : this.state.isLoaded === false ? (
            "Loading Data"
          ) : (
            <TableDisplay tableData={this.state.tableData} />
          )}
        </div>
      </>
    );
  }
}
