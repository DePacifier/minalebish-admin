import React from "react";

const NotificationCreate = (props) => {
  return (
    <>
      <h1 className="title">Info</h1>
      <h2 className="subtitle">Basic customer information</h2>
      <div className="info-container">
        <form onSubmit={props.nextHandler}>
          <div className="input-group">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={props.titleData}
              onChange={props.changeHandler}
            />
            <input
              type="text"
              name="body"
              placeholder="Body"
              value={props.bodyData}
              onChange={props.changeHandler}
            />
            <select
              name="contact"
              value={props.contactData}
              onChange={props.changeHandler}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="both">Both</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default NotificationCreate;
