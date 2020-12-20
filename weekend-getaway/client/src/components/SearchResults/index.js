import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../utils/API";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../Map";
import Aside from "../Aside";
import Col from "../Col";
import Row from "../Row";
import Dates from "../Dates";
import Checkbox from "../Checkbox";
import { Last } from "react-bootstrap/esm/PageItem";
import { useIndexedDB } from "react-indexed-db";

function SearchResults(props) {
  // console.log(props);

  const [save, setState] = useState([]);
  const { add } = useIndexedDB("activity");
  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });

  // Add campsite info to indexedDB
  function handleFormSubmit(
    campsite,
    lat,
    lon,
    reservable,
    fee,
    phone,
    activity
  ) {
    // event.preventDefault();
    // lat: lat,
    //       lon: lon,
    //       reservable: reservable,
    //       fee: fee,
    //       phone: phone,

    add({
      activity: activity,
      user: props.userStatus.uid,
      name: campsite,
      lat: lat,
      lon: lon,
    }).then(
      (event) => {
        console.log("ID Generated: ", event);
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log("save button was clicked!");
    // console.log(props.userStatus.uid);
    // setState();

    // Save selected campsite to DB
    // API.saveToItinerary({
    //   user: props.userStatus.uid,
    //   campsite: campsite,
    //   campRes: reservable,
    //   campFee: fee,
    //   campPhone: phone,
    //   campLat: lat,
    //   campLon: lon,
    // })
    //   .then((res) => alert("Campsite has now been saved to your itinerary!"))
    //   .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Dates />

      <div className="row">
        <div className="resultsContainer">
          <h3>Campites for: {props.searched}</h3>
          <Row>
            <Col size="md-3">
              <Checkbox
                name="hotsprings"
                checked={props.filter.hotsprings}
                handleCheckbox={(e) => {
                  props.handleCheckboxChange(e);
                }}
              />

              <Checkbox
                name="campsites"
                checked={props.filter.campsites}
                handleCheckbox={(e) => {
                  props.handleCheckboxChange(e);
                }}
              />

              <Checkbox
                name="weather"
                checked={props.filter.weather}
                handleCheckbox={(e) => {
                  props.handleCheckboxChange(e);
                }}
              />
            </Col>
            <Col size="md-6">
              {props.results.map((res, index) => {
                let id = index + 1;
                return (
                  <div>
                    <Row>
                      <Col size="md-6">
                        <Card
                          key={id}
                          className="campsiteCard"
                          style={{ width: "30rem" }}
                        >
                          <Card.Body>
                            {props.userStatus ? (
                              <div
                                onClick={() =>
                                  handleFormSubmit(
                                    res.name,
                                    res.lat,
                                    res.lng,
                                    res.reservable,
                                    res.fee,
                                    res.phone,
                                    res.activity
                                  )
                                }
                                className="btn saveBtn"
                                title="Save to Itinerary"
                              >
                                <FontAwesomeIcon icon="heart" size="lg" />
                              </div>
                            ) : (
                              <span> </span>
                            )}
                            <Card.Title> Campsite: {res.name} </Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                              {/* Description: {res.description} */}
                            </Card.Text>
                            <Card.Text>
                              {" "}
                              Reservable: {res.reservable}{" "}
                            </Card.Text>
                            <Card.Text> Fee: {res.fee} </Card.Text>
                            <Card.Text> Phone Number: {res.phone} </Card.Text>
                            <Card.Link href="#">Campsite Link</Card.Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Col>
            <Col size="md-3">
              <Aside>
                {props.results.length > 0 ? (
                  <Map results={props.results} />
                ) : (
                  <div />
                )}
              </Aside>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
