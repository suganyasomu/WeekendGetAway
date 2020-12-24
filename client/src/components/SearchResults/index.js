import React, { useState, useContext } from "react";
// import "./style.css";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import CardGroup from "react-bootstrap/CardGroup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import API from "../../utils/API";
import SearchContext from "../../utils/SearchContext";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../Map";
import Aside from "../Aside";
import Col from "../Col";
import Row from "../Row";
import Checkbox from "../Checkbox";
// import Section from "../Section"
// import { Last } from "react-bootstrap/esm/PageItem";
import { useIndexedDB } from "react-indexed-db";
import CampingData from "../CampingData";
import WeatherData from "../WeatherData";
import HotspringsData from "../HotspringsData";

function SearchResults(props) {
  // console.log(props);

  const { search } = useContext(SearchContext);
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
    add({
      activity: activity,
      user: props.userStatus.uid,
      name: campsite,
      lat: lat,
      lon: lon,
      description: description,
      fee: fee,
      phone: phone,
      city: search,
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
  }

  return (
    <div className="container">
      <div className="row">
        <div className="resultsContainer">
          <h3>Campites for: {search}</h3>
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
              <CampingData
                data={props.results.campsites}
                handleFormSubmit={handleFormSubmit}
              />
              <HotspringsData
                filter={props.filter.hotsprings}
                data={props.results.hotsprings}
              />
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
          <WeatherData
            filter={props.filter.weather}
            searched={search}
            weatherCondition={props.weatherCondition}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
