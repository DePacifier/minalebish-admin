import React from "react";
import { withRouter } from "react-router-dom";

import "./password-changed.styles.scss";

const handleSubmit = (event, props) => {
  this.props.handleLogOut(event);
  props.history.push("/");
};

const PasswordChanged = (props) => {
  return (
    <div className="change-password-container">
      <div className="change-container">
        <h1>Password Changed</h1>
        <h2>
          Your Password has been Updated. Please login again with the new
          password
        </h2>
        <button
          className="submit-button"
          onClick={(event) => handleSubmit(event, props)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default withRouter(PasswordChanged);
