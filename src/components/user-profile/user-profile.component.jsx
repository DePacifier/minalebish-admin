import React from "react";

import "./user-profile.styles.scss";

const UserProfile = () => {
  return (
    <>
      <h1 className="title">User</h1>
      <h2 className="subtitle">Profile</h2>
      <div className="main-flex-dash-container">
        <form className="user-profile-form">
          <label>Name</label>
          <input disabled type="text" value="Jon Doe" />
          <label>Email</label>
          <input disabled type="email" value="jondoe@gmail.com" />
          <label>Phone Number</label>
          <input disabled type="tel" value="+251 911 42 1268" />
          <label>Role</label>
          <input disabled type="text" value="Admin" />
        </form>
      </div>
    </>
  );
};

export default UserProfile;
