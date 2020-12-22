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
import Checkbox from "../Checkbox";
// import Section from "../Section"
import { Last } from "react-bootstrap/esm/PageItem";
import { useIndexedDB } from "react-indexed-db";
import LoginModal from "../LoginModal";
import CampingData from "../CampingData";

function SearchResults(props) {
  // console.log(props);

  const [save, setState] = useState([]);
  const [filter, setFilter] = useState({
    hotsprings: false,
    campsites: false,
    weather: false,
  });
  const { add } = useIndexedDB("activity");

  // Add campsite info to indexedDB
  function handleFormSubmit(
    campsite,
    lat,
    lon,
    reservable,
    fee,
    phone,
    activity,
    description
  ) {
    // Validate user date
    // if (startDate === "") {
    //   return alert("Please Enter Start Date");
    // } else if (endDate === "") {
    //   return alert("Please Enter End Date");
    // } else if (startDate > endDate) {
    //   return alert("Please Enter A End Date After Start Date");
    // }

    add({
      activity: activity,
      user: props.userStatus.uid,
      name: campsite,
      lat: lat,
      lon: lon,
      description: description,
      fee: fee,
      phone: phone,
      city: props.searched,
      start: props.startDate,
      end: props.endDate,
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


  return (
    <div className="container">
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
              <CampingData data={props.results} handleFormSubmit={handleFormSubmit} />
            </Col>
            <Col size="md-4">
              <Aside>
                {props.results.length > 0 ? (
                  <Map results={props.results} location={props.location} />
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
