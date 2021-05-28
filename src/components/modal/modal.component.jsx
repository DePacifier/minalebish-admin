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
            <span class="material-icons">person</span>
            <p>User</p>
            <form>
              <div className="input-group">
                <p>Info</p>
                <p>Basic user information</p>
                <input type="text" name="firstName" placeholder="First Name" />
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                />
                <input type="text" name="lastName" placeholder="Last Name" />
                <p>Contact Info</p>
                <p>Contact user information</p>
                <input type="email" name="email" placeholder="Email" />
                <input type="tel" name="phone" placeholder="Phone Number" />
                <p>Role</p>
                <p>General menu information</p>
                <select name="role">
                  <option value="role1">role1</option>
                  <option value="role2">role2</option>
                </select>
              </div>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return props.displayModal ? modal : null;
};

export default Modal;
