import React from "react";

import "./modal.styles.scss";

const Modal = (props) => {
  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  const modal = (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content-container">
        <div className="close-button">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="user-detail">
            <span class="material-icons icon">person</span>
            <h1>User</h1>
            <form>
              <div className="input-group">
                <h2>Info</h2>
                <h3>Basic user information</h3>
                <input type="text" name="firstName" placeholder="First Name" />
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                />
                <input type="text" name="lastName" placeholder="Last Name" />
                <h2>Contact Info</h2>
                <h3>Contact user information</h3>
                <input type="email" name="email" placeholder="Email" />
                <input type="tel" name="phone" placeholder="Phone Number" />
                <h2>Role</h2>
                <h3>General menu information</h3>
                <div className="custom-select">
                  <select name="role">
                    <option value="Role1">Role1</option>
                    <option value="Role2">Role2</option>
                  </select>
                  <span class="material-icons custom-arrow">
                    arrow_drop_down
                  </span>
                </div>
              </div>

              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return props.displayModal ? modal : null;
};

export default Modal;
