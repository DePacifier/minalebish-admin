import React from "react";

import "./user-profile.styles.scss";

const UserProfile = ({ full_name, email, phone_no, role }) => {
  return (
    <>
      <h1 className="title">User</h1>
      <h2 className="subtitle">Profile</h2>
      <div className="main-flex-dash-container">
        <form className="user-profile-form">
          <label>Name</label>
          <input disabled type="text" value={full_name} />
          <label>Email</label>
          <input disabled type="email" value={email} />
          <label>Phone Number</label>
          <input disabled type="tel" value={phone_no} />
          <label>Role</label>
          <input disabled type="text" value={role} />
        </form>
      </div>
    </>
  );
};

export default UserProfile;
