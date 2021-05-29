import React from "react";

import "./notification-create.styles.scss";

const NotificationCreate = (props) => {
  return (
    <>
      <h1 className="title">Notification</h1>
      <h2 className="subtitle">Create</h2>
      <div className="info-container">
        <form onSubmit={props.nextHandler}>
          <div className="input-group">
            <h1 className="title">Info</h1>
            <h2 className="subtitle">Basic customer information</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={props.titleData}
              onChange={props.changeHandler}
            />
            <input
              className="text-area"
              type="text"
              name="body"
              placeholder="Body"
              value={props.bodyData}
              onChange={props.changeHandler}
            />
            <div className="custom-select">
              <select
                name="contact"
                value={props.contactData}
                onChange={props.changeHandler}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="both">Both</option>
              </select>
              <span class="material-icons custom-arrow">arrow_drop_down</span>
            </div>
          </div>
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default NotificationCreate;
