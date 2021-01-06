import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { AuthContext } from "../Auth.js";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Row from "../components/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteBtn from "../components/DeleteBtn";
import ItineraryModal from "../components/ItineraryModal";
import { useIndexedDB } from "react-indexed-db";

function UserItinerary() {
  const [trips, setTrips] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { add, clear } = useIndexedDB("directions");
  const uid = currentUser.uid;

  useEffect(() => {
    loadItinerary(uid);
  }, []);

  // Load the user's saved trips from database
  function loadItinerary(id) {
    API.getItinerary(id)
      .then((res) => setTrips(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes an itinerary from the database with a given id, then reloads the user's itineraries from the db
  function deleteItinerary(id) {
    API.deleteItinerary(id)
      .then((res) => loadItinerary(uid))
      .catch((err) => console.log(err));
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
    <div style={{
      margin: '0', 
      backgroundImage: "linear-gradient(#E8E8E4, white)", 
      width: '100%', 
      height: '100%'
    }} >  
      <div className="container" style={{ paddingTop: '30px' }}>
        <h3> Saved Trips </h3>

        {trips.map((res, index) => {
          let id = index + 1;

          return (
            <div className="container" key={id} style={{ paddingBottom: "20px"}}>
              <Row>
                <div className="col-3"> </div>
                <Card
                  className="savedCampsites col-6 mt-3"
                  style={{ width: "30rem", boxShadow: "2px 2px 5px grey" }}
                >
                  <Card.Header>
                    <Link
                      to={{
                        pathname: "/directions",
                      }}
                      className="btn directionsBtn"
                      title="Get Directions"
                      onClick={() => {
                        clear();
                        add({
                          name: res.campsite,
                          lat: res.campLat,
                          lon: res.campLon,
                        }).then(
                          (event) => {
                            console.log("ID Generated: ", event.target);
                          },
                          (error) => {
                            console.log(error);
                          }
                        );
                      }}
                    >
                      <FontAwesomeIcon icon="directions" />
                    </Link>
                    <DeleteBtn onClick={() => deleteItinerary(res._id)} />
                    <Card.Title className="mt-3">
                      {" "}
                      Trip to {res.campCity}{" "}
                    </Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Trip Dates: {convertDate(res.startDate)} -{" "}
                      {convertDate(res.endDate)}
                    </Card.Text>
                    <Card.Text>Campsite: {res.campsite}</Card.Text>
                  </Card.Body>
                  <Button
                    variant="secondary"
                    className="btn btn-sm justify-content-center mb-2"
                  >
                    <ItineraryModal trip={res} />
                  </Button>
                </Card>
                <div className="col-3"> </div>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserItinerary;
