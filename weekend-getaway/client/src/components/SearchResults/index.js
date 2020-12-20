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

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    console.log(checked);
    setFilter({
      ...filter,
      [name]: checked,
    });
    // run api call if checked is true for that filter state property
    // if(checked && name ==="campsites"){
    //   API.getCampsites(query)
    //   // .then((res) => console.log(res.data))
    //   .then(function (res) {
    //     setCampsites(res.data);
    //   })
    //   .catch((err) => console.log(err));
    // }
    // else if(checked && name ==="hotsprings"){

    // }else if{

    // }
  }
  // Save campsite info to DB
  function handleFormSubmit(campsite, lat, lon, reservable, fee, phone) {
    // event.preventDefault();
    // console.log(campsite);
    // console.log(lat);

    // console.log("save button was clicked!");
    // console.log(props.userStatus.uid);
    // setState();

    // Save selected campsite to DB
    API.saveToItinerary({
      user: props.userStatus.uid,
      campsite: campsite,
      campRes: reservable,
      campFee: fee,
      campPhone: phone,
      campLat: lat,
      campLon: lon,
      begin_date: startDate,
      end_date: endDate
    })
      .then((res) => alert("Campsite has now been saved to your itinerary!"))
      .catch((err) => console.log(err));
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
              <Col size="md-3">
                  <Checkbox
                  name="hotsprings"
                  checked={props.filter.hotsprings}
                  handleCheckbox={(e)=>{props.handleCheckboxChange(e)}}
                />

                <Checkbox
                  name="campsites"
                  
                  checked={props.filter.campsites}
                  handleCheckbox={(e)=>{props.handleCheckboxChange(e)}}
                />

                <Checkbox
                  name="weather"
                  checked={props.filter.weather}
                  handleCheckbox={(e)=>{props.handleCheckboxChange(e)}}
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
                                  onClick={() => handleFormSubmit(res.name, res.lat, res.lng, res.reservable, res.fee, res.phone)}
                                  className="btn saveBtn"
                                  title="Save to Itinerary"
                                >
                                  <FontAwesomeIcon icon="heart" size="lg" />
                                </div>
                              ) : (
                                <alert> Please select your trip dates before saving </alert>
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
