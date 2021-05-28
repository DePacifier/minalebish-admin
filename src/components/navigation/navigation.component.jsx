import React from "react";

import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = ({ showLabels }) => {
  return (
    <div className={`flex-container ${showLabels ? "" : "mini-version"}`}>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <span className="material-icons-outlined md-36">dashboard</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/Dashboard">Dashboard</Link>
              </span>
            ) : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">sync_alt</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/Transaction">Transactions</Link>
              </span>
            ) : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">restaurant_menu</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/Menu">Menu</Link>
              </span>
            ) : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">groups</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/Customers">Customers</Link>
              </span>
            ) : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">person</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/User">User</Link>
              </span>
            ) : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">notifications</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/Notifications">Notification</Link>
              </span>
            ) : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">report</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/Report">Report</Link>
              </span>
            ) : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">description</span>
            {showLabels ? (
              <span className="label">
                <Link to="/123/Logs">Log</Link>
              </span>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
