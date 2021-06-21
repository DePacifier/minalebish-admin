import React from "react";

import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = ({ showLabels, activeTab }) => {
  return (
    <div className={`flex-container ${showLabels ? "" : "mini-version"}`}>
      <div className="logo">Minalesh Tera</div>
      <div>
        <ul className="nav-list">
          <li
            className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
          >
            <Link to="/123/Dashboard">
              <span className="material-icons">dashboard</span>
              {showLabels ? <span className="label">Dashboard</span> : null}
            </Link>
          </li>
          <li
            className={`nav-item ${
              activeTab === "transaction" ? "active" : ""
            }`}
          >
            <Link to="/123/Transaction">
              <span className="material-icons">sync_alt</span>
              {showLabels ? <span className="label">Transactions</span> : null}
            </Link>
          </li>
          <li className={`nav-item ${activeTab === "menu" ? "active" : ""}`}>
            <Link to="/123/Menu">
              <span className="material-icons">restaurant_menu</span>
              {showLabels ? <span className="label">Menu</span> : null}
            </Link>
          </li>
          <li
            className={`nav-item ${activeTab === "customers" ? "active" : ""}`}
          >
            <Link to="/123/Customers">
              <span className="material-icons">groups</span>
              {showLabels ? <span className="label">Customers</span> : null}
            </Link>
          </li>
          <li className={`nav-item ${activeTab === "user" ? "active" : ""}`}>
            <Link to="/123/User">
              <span className="material-icons">person</span>
              {showLabels ? <span className="label">User</span> : null}
            </Link>
          </li>
          <li
            className={`nav-item ${
              activeTab === "notifications" ? "active" : ""
            }`}
          >
            <Link to="/123/Notifications">
              <span className="material-icons">notifications</span>
              {showLabels ? <span className="label">Notification</span> : null}
            </Link>
          </li>
          <li className={`nav-item ${activeTab === "report" ? "active" : ""}`}>
            <Link to="/123/Report">
              <span className="material-icons">report</span>
              {showLabels ? <span className="label">Report</span> : null}
            </Link>
          </li>
          <li className={`nav-item ${activeTab === "logs" ? "active" : ""}`}>
            <Link to="/123/Logs">
              <span className="material-icons">description</span>
              {showLabels ? <span className="label">Log</span> : null}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
