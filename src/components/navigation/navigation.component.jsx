import React from "react";

import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = ({ showLabels }) => {
  return (
    <div className={`flex-container ${showLabels ? "" : "mini-version"}`}>
      <div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/123/Dashboard">
              <span className="material-icons-outlined md-36">dashboard</span>
              {showLabels ? <span className="label">Dashboard</span> : null}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/123/Transaction">
              <span className="material-icons-outlined">sync_alt</span>
              {showLabels ? <span className="label">Transactions</span> : null}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/123/Menu">
              <span className="material-icons-outlined">restaurant_menu</span>
              {showLabels ? <span className="label">Menu</span> : null}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/123/Customers">
              <span className="material-icons-outlined">groups</span>
              {showLabels ? <span className="label">Customers</span> : null}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/123/User">
              <span className="material-icons-outlined">person</span>
              {showLabels ? <span className="label">User</span> : null}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/123/Notifications">
              <span className="material-icons-outlined">notifications</span>
              {showLabels ? <span className="label">Notification</span> : null}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/123/Report">
              <span className="material-icons-outlined">report</span>
              {showLabels ? <span className="label">Report</span> : null}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/123/Logs">
              <span className="material-icons-outlined">description</span>
              {showLabels ? <span className="label">Log</span> : null}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
