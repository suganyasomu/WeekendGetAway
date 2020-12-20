import React, {useState, useEffect, useContext} from"react";
import API from "../utils/API";
import { AuthContext } from "../Auth.js";
import {Link} from "react-router-dom";
import { Card } from "react-bootstrap";
import Row from "../components/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteBtn from "../components/DeleteBtn";

function UserItinerary() {
    const [trips, setTrips] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const uid = currentUser.uid;
    // console.log(uid);

    useEffect(() => {
        loadItinerary(uid)
    }, [])

    // Load the user's saved trips from database
    function loadItinerary(id) {
        // console.log(id); // user's login ID

        API.getItinerary(id)
        // .then(res => console.log(res.data))
        .then(res => setTrips(res.data) )
        .catch(err => console.log(err));
    }

     // Deletes an itinerary from the database with a given id, then reloads the user's itineraries from the db
    function deleteItinerary(id) {
        console.log(id);
        API.deleteItinerary(id)
        .then(res => loadItinerary(uid))
        .catch(err => console.log(err));
    }

    function convertDate(date) {
        let dt = new Date(date);
        let month = dt.getMonth() + 1; //months from 1-12
        let day = dt.getDate();
        let year = dt.getFullYear(dt);
        let newDate = month + "/" + day + "/" + year;
        return newDate;
        
    }

    return (
        <div className="container">
            <h3> Saved Trips </h3>
            
            {trips.map((res, index) => {
                let id = index+1;
                let latitude = res.campLat;
                let longitude = res.campLon;

                return (
                    <div className="container" key={id}>
                        <Row >
                            <div className="col-3"> </div>
                            <Card className="savedCampsites col-6" style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Link to={{
                                            pathname: "/directions",
                                            coordinates: {
                                                lat: latitude,
                                                lon: longitude
                                            }
                                        }}
                                        className="btn directionsBtn" 
                                        title="Get Directions"
                                    >
                                        <FontAwesomeIcon icon="directions" />                                     
                                    </Link>
                                    <DeleteBtn onClick={() => deleteItinerary(res._id)} />
                                    <Card.Title> Campsite: {res.campsite} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Trip Dates: { convertDate(res.begin_date) } - { convertDate(res.end_date) } 
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Activities: 
                                    </Card.Text>
                                </Card.Body>
                            </Card> 
                            <div className="col-3"> </div>
                        </Row>
                    </div>
                )
            })}
        </div>

    );
}

export default UserItinerary;