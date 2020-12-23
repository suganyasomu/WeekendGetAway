import React from"react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import "./style.css";


function Navigation(props) {
    return (

        <aside>
           {props.children}
        </aside>
        
    );
}

export default Navigation;