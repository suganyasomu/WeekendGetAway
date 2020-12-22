import React, {useContext} from"react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import "./style.css";
import { AuthContext } from "../../Auth";



function Navigation() {
    // Check if user is logged in or not:
    const { currentUser } = useContext(AuthContext);
    
    return (
        <div className="navigationContainer">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Weekend Getaway</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        {!currentUser && <Nav.Link eventKey={2} href="/login"> Login </Nav.Link> }
                        {!currentUser && <Nav.Link href="/signup"> Signup </Nav.Link> }
                        {currentUser && <Nav.Link href="/itinerary"> Itinerary </Nav.Link> }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            

        </div>
    );
}

export default Navigation;