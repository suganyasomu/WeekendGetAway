import React, { useState } from"react";
import {Modal, Button, Card } from "react-bootstrap";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn";

function ItineraryModal(props) {
    const [activities, setActivities] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {loadActivities(props.trip._id); setShow(true);}

    function convertDate(date) {
        let dt = new Date(date);
        let month = dt.getMonth() + 1; //months from 1-12
        let day = dt.getDate();
        let year = dt.getFullYear(dt);
        let newDate = month + "/" + day + "/" + year;
        return newDate;
    }

    function deleteActivity(itinId, actId) {
    API.deleteActivity(itinId, actId)
        .then((res) => loadActivities(itinId))
        .catch((err) => console.log(err));
    }

    function loadActivities(id) {
    API.getOneItinerary(id)
        .then((res) => setActivities(res.data.activities))
        .catch((err) => console.log(err));
    }

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
                    <Modal.Title>Full Itinerary for {props.trip.campCity}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className="bg-dark text-white p-2">Campsite:</h2>  <p>{props.trip.campsite}</p>
                    <h2 className="bg-dark text-white p-2">Dates: </h2><p> {convertDate(props.trip.startDate)} - {convertDate(props.trip.endDate)}</p>
                    <h2 className="bg-dark text-white p-2">Campsite Description: </h2> <p dangerouslySetInnerHTML={{__html: props.trip.campDescription}}></p>
                    <h2 className="bg-dark text-white p-2">Campsite Fees:</h2> <p dangerouslySetInnerHTML={{__html: props.trip.campFee}}></p>
                    <h2 className="bg-dark text-white p-2">Campsite Phone:</h2><p> {props.trip.campPhone}</p>
                    <h2 className="bg-dark text-white p-2">Activities: </h2>
                    {activities.map((activity) => {
                        return (
                            <Card key={activity._id}>
                                <Card.Header>
                                    <h4 style={{ float: "left" }}>Activity type: {activity.activity.charAt(0).toUpperCase() + activity.activity.slice(1)}</h4>
                                    <DeleteBtn className="delete-btn" onClick={() => deleteActivity(props.trip._id, activity._id)} />
                                </Card.Header>
                                <Card.Body>
                                    <p><strong>Activity Name:</strong> {activity.name}<br/>
                                    <strong>Location:</strong> {activity.lat}, {activity.lng}<br/></p>

                                    {activity.activity === "biking" ? (
                                    <p>
                                    <strong>Summary:</strong> {activity.summary}<br/>
                                    <strong>Length:</strong> {activity.length} miles<br/>
                                    <strong>Difficulty:</strong> {activity.difficulty}<br/>
                                    <strong>Elevation Change:</strong> {activity.elevationChange} ft </p>
                                    ) : (<div/>) }

                                    {activity.activity === "hiking" ? (
                                    <p>
                                    <strong>Summary:</strong> {activity.summary}<br/>
                                    <strong>Length:</strong> {activity.length} miles<br/>
                                    <strong>Difficulty:</strong> {activity.difficulty}<br/>
                                    <strong>Elevation Change:</strong> {activity.elevationChange} ft </p>
                                    ) : (<div/>) }

                                    {activity.activity === "climbing" ? (
                                    <p>
                                    <strong>Type:</strong> {activity.type}<br/>
                                    <strong>Rating:</strong> {activity.rating} </p>
                                    ) : (<div/>) }

                                </Card.Body>
                            </Card>
                        )
                    })}
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