import React from "react";
import "./style.css";

function Checkbox(props) {
  return (
    <div className="checkbox radio">
      <input
        type="checkbox"
        id={props.name}
        onChange={props.handleCheckbox}
        name={props.name}
        checked={props.checked}
      /><span></span>
      <label htmlFor={props.name}>
        {`${props.name.charAt(0).toUpperCase()}${props.name.slice(
          1,
          props.name.length
        )}`}
      </label>
    </div>
  );
}

export default Checkbox;
