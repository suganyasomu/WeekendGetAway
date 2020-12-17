import React, {useState, useEffect, useContext} from"react";
import API from "../utils/API";
import { AuthContext } from "../Auth.js";
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

    //Get user's geolocation
    function geoFindMe() {

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.cookie = `lat=${latitude}`;
            document.cookie = `lon=${longitude}`;
        }

        function error() {
            alert('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            // console.log('Locating…');

            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }


    function handleFormSubmit() {
        // Go to the directions page

        geoFindMe(); // get user's geolocation 
        let lat = getCookie("lat");
        let lon = getCookie("lon");
        console.log("Lat: " + lat + " Lon: " + lon);

        API.sendGeolocation(lat, lon)
        .then(res => console.log("successfully sent geolocation to backend!") )
        .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <h3> Saved Trips </h3>
            
            {trips.map((res, index) => {
                let id = index+1;

                return (
                    <div className="container">
                        <Row >
                            <div className="col-3"> </div>
                            <Card key={id} className="savedCampsites col-6" style={{ width: '30rem' }}>
                                <Card.Body>
                                    <div onClick={() => handleFormSubmit()} className="btn directionsBtn" title="Get Directions"> 
                                        <FontAwesomeIcon icon="directions" />                                        
                                    </div> 
                                    <DeleteBtn onClick={() => deleteItinerary(res._id)} />
                                    <Card.Title> Campsite: {res.campsite} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Trip Dates: </Card.Subtitle>
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