import React, { useState } from"react";
import {Modal, Button } from "react-bootstrap";
import Login from "../../pages/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


function ItineraryModal(props) {

    function convertDate(date) {
        let dt = new Date(date);
        let month = dt.getMonth() + 1; //months from 1-12
        let day = dt.getDate();
        let year = dt.getFullYear(dt);
        let newDate = month + "/" + day + "/" + year;
        return newDate;
    }

    // Login Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="row">
            <div className="col-12">
            <span onClick={handleShow}>
            <p>See Full Itinerary</p>
            </span>
            </div>
        </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Full Itinerary</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Campsite:</h2>  <p>{props.trip.campsite}</p>
                    <h2>Dates: </h2><p> {convertDate(props.trip.startDate)} - {convertDate(props.trip.endDate)}</p>
                    <h2>Campsite Description: </h2> <p dangerouslySetInnerHTML={{__html: props.trip.campDescription}}></p>
                    <h2>Campsite Fees:</h2> <p dangerouslySetInnerHTML={{__html: props.trip.campFee}}></p>
                    <h2>Campsite Phone:</h2><p> {props.trip.campPhone}</p>
                    <h2>Activities: </h2>
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

export default ItineraryModal;