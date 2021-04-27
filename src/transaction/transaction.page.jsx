import "./transaction.styles.scss";
import React, { Component } from "react";
import Navigation from "../components/navigation/navigation.component";

class Transaction extends Component {
  render() {
    return (
      <div className="transaction-grid-container">
        <div className="grid-item nav">
          <Navigation />
        </div>
        <div className="grid-item header">
          <div className="details">
            <h1 className="title">Jon Dow</h1>
            <h2 className="subtitle">Admin</h2>
          </div>
          <div className="image">JD</div>
          <div className="header-link-container">
            <ul className="links-list">
              <li className="link-item">
                <a className="active" href="">
                  Menu
                </a>
              </li>
              <li className="link-item">
                <a href="">Category</a>
              </li>
              <li className="link-item">
                <a href="">Unit</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content-links">
          <ul className="links-list">
            <li className="link-item active">
              <a href="">List</a>
            </li>
            <li className="link-item">
              <a href="">Create</a>
            </li>
          </ul>
        </div>
        <div className="grid-item main">
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

                <select name="cars">
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
        </div>
      </div>
    );
  }
}

export default Transaction;
