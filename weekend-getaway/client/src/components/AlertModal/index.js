import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AlertModal(props) {
    console.log("MODAL");
    console.log(props);
    let { modalState } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(modalState);

    return (
        <>
            {/* <div onClick={handleShow}>
                Launch demo modal
            </div> */}
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default AlertModal;