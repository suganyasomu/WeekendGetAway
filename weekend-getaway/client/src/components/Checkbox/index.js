import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import "./style.css";

function Checkbox(props) {
  return (
    <div>
      <input
        type="checkbox"
        id={props.name}
        onChange={props.handleCheckboxChange}
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
