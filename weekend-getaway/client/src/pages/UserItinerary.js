import React, {useState, useEffect, useContext} from"react";
import API from "../utils/API";
import { AuthContext } from "../Auth.js";
import { Card } from "react-bootstrap";
import Row from "../components/Row";

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