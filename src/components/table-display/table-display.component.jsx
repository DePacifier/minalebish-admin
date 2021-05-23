import React, { Component } from "react";

import "./table-display.styles.scss";

export default class TableDisplay extends Component {
  render() {
    return (
      <div className="main-flex-container">
        <table className="display-table">
          <tr className="table-header">
            <th>Date</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Price Old</th>
            <th>Unit</th>
            <th></th>
          </tr>
          <tr className="table-data">
            <td>25 Dec 2021</td>
            <td>Selit</td>
            <td>Oil</td>
            <td>$ 10</td>
            <td>$ 9</td>
            <td>Pound</td>
            <td>
              <span class="material-icons-outlined">edit_note</span>
            </td>
          </tr>
          <tr className="table-data">
            <td>25 Dec 2021</td>
            <td>Selit</td>
            <td>Oil</td>
            <td>$ 10</td>
            <td>$ 9</td>
            <td>Pound</td>
            <td>
              <span class="material-icons-outlined">edit_note</span>
            </td>
          </tr>
          <tr className="table-data">
            <td>25 Dec 2021</td>
            <td>Selit</td>
            <td>Oil</td>
            <td>$ 10</td>
            <td>$ 9</td>
            <td>Pound</td>
            <td>
              <span class="material-icons-outlined">edit_note</span>
            </td>
          </tr>
          <tr className="table-data">
            <td>25 Dec 2021</td>
            <td>Selit</td>
            <td>Oil</td>
            <td>$ 10</td>
            <td>$ 9</td>
            <td>Pound</td>
            <td>
              <span class="material-icons-outlined">edit_note</span>
            </td>
          </tr>
          <tr className="table-data">
            <td>25 Dec 2021</td>
            <td>Selit</td>
            <td>Oil</td>
            <td>$ 10</td>
            <td>$ 9</td>
            <td>Pound</td>
            <td>
              <span class="material-icons-outlined">edit_note</span>
            </td>
          </tr>
          <tr className="table-data">
            <td>25 Dec 2021</td>
            <td>Selit</td>
            <td>Oil</td>
            <td>$ 10</td>
            <td>$ 9</td>
            <td>Pound</td>
            <td>
              <span class="material-icons-outlined">edit_note</span>
            </td>
          </tr>
        </table>
        <div className="table-navigation">
          <div className="item page-nav">
            <span class="material-icons-outlined">first_page</span>
            <span className="material-icons-outlined">navigate_before</span>
            <span className="links-holder">
              <a className="page active"> 1 </a>
              <a className="page active"> 2 </a>
              <a className="page active"> 3 </a>
            </span>
            <span className="material-icons-outlined">navigate_next</span>
            <span class="material-icons-outlined">last_page</span>
          </div>
          <div className="item per-page">
            <span>View</span>

            <select name="item-view">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <span>items per page</span>
          </div>
          <div className="item desc">1 - 6 out of 45 items</div>
        </div>
      </div>
    );
  }
}
