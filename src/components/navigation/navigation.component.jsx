import "./navigation.styles.scss";

import React from "react";

const Navigation = () => {
  return (
    <div className="flex-container">
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <span className="material-icons-outlined md-36">dashboard</span>
            <span className="label">Dashboard</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">sync_alt</span>
            <span className="label">Transactions</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">restaurant_menu</span>
            <span className="label">Menu</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">groups</span>
            <span className="label">Customers</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">person</span>
            <span className="label">User</span>
          </li>
          <li className="nav-item">
            <span className="material-icons-outlined">notifications</span>
            <span className="label">Notification</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
