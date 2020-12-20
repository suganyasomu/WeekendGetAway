import React, { useState } from"react";
import "./style.css";
import {Modal, Button } from "react-bootstrap";
import Login from "../../pages/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


function LoginModal() {

    // Login Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="saveHeart row" onClick={handleShow}>
            <FontAwesomeIcon icon="heart" size="lg" />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login to Save Itinerary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login/>
                    <p className="text-center">Don't have an account? Sign up <Link to="/signup">here!</Link></p>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LoginModal;




