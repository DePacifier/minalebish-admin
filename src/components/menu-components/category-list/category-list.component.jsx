import React, { Component } from "react";
import TableDisplay from "../../table-display/table-display.component";
import CategoryModal from "../category-modal/category-modal.component";

import "./category-list.styles.scss";

export default class CategoryList extends Component {
  state = {
    modal: false,
    selectedCategory: { id: null, name: "" },
    tableData: [],
    isLoaded: false,
    fetchFailed: false,
  };

  fetchData = () => {
    const axios = this.props.axios;
    axios
      .get("/category")
      .then((response) => {
        //create the actual table data that will be passed to table display
        let tableData = [["Date", "Category Name", " "]];
        let categoryDict = response.data.data;
        for (let index in categoryDict) {
          tableData.push([
            categoryDict[index].created_at.slice(0, 10),
            categoryDict[index].name,
            <div
              className="material-icons"
              onClick={() =>
                this.handleCategorySelect(
                  categoryDict[index].id,
                  categoryDict[index].name
                )
              }
            >
              edit_note
            </div>,
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

  selectModal = (event) => {
    this.fetchData();
    this.setState({
      modal: !this.state.modal,
      selectedCategory: { id: null, name: "" },
    });
  };

  handleCategorySelect = (id, name) => {
    //Handle Category selection
    console.log("category id is ", id);
    this.setState(
      { selectedCategory: { id, name } },
      this.setState({ modal: true })
    );
  };

  render() {
    return (
      <>
        {this.state.modal ? (
          <CategoryModal
            displayModal={this.state.modal}
            selectedCategory={this.state.selectedCategory}
            closeModal={this.selectModal}
            axios={this.props.axios}
          />
        ) : (
          ""
        )}
        <div className="content-title">
          <h1 className="title">Category</h1>
          <h2 className="subtitle">List</h2>
        </div>
        <div className="category-list-container">
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
