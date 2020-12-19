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
import LoginModal from "../LoginModal";

function SearchResults(props) {
  // console.log(props);

  const [save, setState] = useState([]);

  const [dates, setDates] = useState({
    startDate: "",
    endDate: "",
  });

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
    })
      .then((res) => alert("Campsite has now been saved to your itinerary!"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Dates />

      <div className="row">
        <div className="resultsContainer" >
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
            <Col size="md-3">
              {props.results.map((res, index) => {
                let id = index + 1;
                return (
                  <div>
                    <Row>
                      <Col size="md-3">
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
                                    res.phone
                                  )
                                }
                                className="btn saveBtn"
                                title="Save to Itinerary"
                              >
                                <FontAwesomeIcon icon="heart" size="lg" />
                              </div>
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
            <Col size="md-6">
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
            <section style={{width:"100%"}}>
              <h3>Weather Forecast For: {props.searched}</h3>
              {props.weatherCondition.map((res, index) => {
                
                let id = index + 1;
                return (
                 
                     <CardDeck style={{display :"inline-block",marginTop: 20, marginBottom: 20, marginRight:10,width: "10rem"}}> 
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
