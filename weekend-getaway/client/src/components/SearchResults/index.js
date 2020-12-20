import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../utils/API";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../Map";
import Aside from "../Aside";
import Col from "../Col";
import Row from "../Row";
import Dates from "../Dates";
import Checkbox from "../Checkbox";
// import Section from "../Section"
import { Last } from "react-bootstrap/esm/PageItem";
import { useIndexedDB } from "react-indexed-db";
import LoginModal from "../LoginModal";

function SearchResults(props) {
  // console.log(props);

  const [save, setState] = useState([]);
  const [filter, setFilter] = useState({
    hotsprings: false,
    campsites: false,
    weather: false,
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { add } = useIndexedDB("activity");

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
      lon: lon
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
    //   begin_date: startDate,
    //   end_date: endDate
    // })
    //   .then((res) => alert("Campsite has now been saved to your itinerary!"))
    //   .catch((err) => console.log(err));
  }

  const handleStartDate = event => {
    // console.log(event);
    setStartDate(event);
  }

  const handleEndDate = event => {
    // console.log(event);
    setEndDate(event);
  }

  return (
      <div className="container">
        <Dates handleStartDate={handleStartDate} handleEndDate={handleEndDate} />

      <div className="row">
        <div className="resultsContainer">
          <h3>Campites for: {props.searched}</h3>
          <Row>
            <Col size="md-2">
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
                              <span
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
                                className="saveBtn"
                                title="Save to Itinerary"
                              >
                                <FontAwesomeIcon icon="heart" size="lg" />
                              </span>
                            ) : (
                              <LoginModal/>
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
            <Col size="md-4">
              <Aside>
                {props.results.length > 0 ? (
                  <Map results={props.results} />
                ) : (
                  <div />
                )}
              </Aside>
            </Col>
          </Row>
          {/* <Row> */}
          {props.filter.weather ? (
            <section style={{ width: "100%" }}>
              <h3>Weather Forecast For: {props.searched}</h3>
              {props.weatherCondition.map((res, index) => {
                let id = index + 1;
                return (
                  <CardDeck
                    style={{
                      display: "inline-block",
                      marginTop: 20,
                      marginBottom: 20,
                      marginRight: 10,
                      width: "10rem",
                    }}
                  >
                    <Card
                      key={id}
                      className="weatherCard"
                      // style={{marginTop: 20, marginBottom: 20, width: "10rem"}}
                    >
                      <Card.Body>
                        <Card.Text> Temp :{res.temp} </Card.Text>
                        <Card.Text> Date :{res.date} </Card.Text>
                        <Card.Text> Wind :{res.wind} </Card.Text>
                        <Card.Text> Condition :{res.rain} </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                );
              })}
            </section>
          ) : (
            <span> </span>
          )}
          {/* </Row> */}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
