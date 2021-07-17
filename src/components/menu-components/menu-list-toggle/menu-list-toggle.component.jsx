import React, { useState } from "react";
import "./menu-list-toggle.styles.scss";

const MenuToggleComponent = ({
  toggleStatus,
  onToggleMethod,
  onEditMethod,
  id,
}) => {
  const [toggleValue, setToggleValue] = useState(toggleStatus);

  const handleToggleChange = (event) => {
    console.log("clicked");
    const value = event.target.checked;
    console.log(value);
    setToggleValue(!toggleValue);
    if (value === true) {
      console.log("toggle is on");
      //onToggleOn
    } else {
      console.log("togle is off");
      //onToggleOff
    }
  };

  return (
    <div className="toggle-container">
      <label className="toggle">
        <input
          type="checkbox"
          className="toggle-input"
          value={toggleValue}
          onChange={handleToggleChange}
        />
        <div className="toggle-bar">
          <div className="toggle-spin"></div>
        </div>
      </label>
      <div className="material-icons" onClick={() => onEditMethod(id)}>
        edit_note
      </div>
    </div>
  );
};

export default MenuToggleComponent;
