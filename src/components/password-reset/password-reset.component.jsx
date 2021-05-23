import React from "react";
import { withRouter } from "react-router-dom";

import "./password-reset.styles.scss";

const handleSubmit = (props) => {
  props.history.push("/");
};

const PasswordReset = (props) => {
  return (
    <div className="reset-password-container">
      <div className="reset-container">
        <h1>Password Reset</h1>
        <h2>New password has been sent to your email.</h2>
        <button className="submit-button" onClick={() => handleSubmit(props)}>
          OK
        </button>
      </div>
    </div>
  );
};

export default withRouter(PasswordReset);
