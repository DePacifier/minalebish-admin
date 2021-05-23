import "./navigation.styles.scss";

import React from "react";

const Navigation = ({ showLabels }) => {
  return (
    <div className={`flex-container ${showLabels ? "" : "mini-version"}`}>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <span className="material-icons-outlined md-36">dashboard</span>
            {showLabels ? <span className="label">Dashboard</span> : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">sync_alt</span>
            {showLabels ? <span className="label">Transactions</span> : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">restaurant_menu</span>
            {showLabels ? <span className="label">Menu</span> : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">groups</span>
            {showLabels ? <span className="label">Customers</span> : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">person</span>
            {showLabels ? <span className="label">User</span> : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">notifications</span>
            {showLabels ? <span className="label">Notification</span> : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">report</span>
            {showLabels ? <span className="label">Report</span> : null}
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">description</span>
            {showLabels ? <span className="label">Log</span> : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
