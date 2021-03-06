import React, { useState, useContext } from "react";
import "./style.css";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import CardGroup from "react-bootstrap/CardGroup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import API from "../../utils/API";
import SearchContext from "../../utils/SearchContext";
import SubmitBtnContext from "../../utils/SubmitBtnContext";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../Map";
import Aside from "../Aside";
import Col from "../Col";
import Row from "../Row";
import Checkbox from "../Checkbox";
// import Section from "../Section"
// import { Last } from "react-bootstrap/esm/PageItem";
import { useIndexedDB } from "react-indexed-db";
import IndexedDBContext from "../../utils/IndexedDBContext";
import CampingData from "../CampingData";
import WeatherData from "../WeatherData";
import HotspringsData from "../HotspringsData";
import HikingData from "../HikingData";
import BikingData from "../BikingData";
import ClimbingData from "../ClimbingData";
import IndexedDBModal from "../IndexedDBModal";
import Scrollspy from "react-scrollspy";
import tent from "../../Assets/tent.svg";
import upArrow from "../../Assets/upArrow.svg";

function SearchResults(props) {
  // console.log(props);

  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);
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
    <div className="resultsContainer">
      {props.filter.weather ? (
        <Row>
          <div className="col-12">
            <WeatherData
              filter={props.filter.weather}
              weatherCondition={props.weatherCondition}
            />
          </div>
        </Row>
      ) : (
        <div />
      )}

      <Row>
        {search && submitted ? (
          <Col size="lg-2 sm-12">
            <section className="leftContainer">
              <Scrollspy
                className="scrollspy"
                items={[
                  "camping-results",
                  "hotsprings-results",
                  "hiking-results",
                  "biking-results",
                  "climbing-results",
                ]}
                currentClassName="is-current"
              >
                <h5>Jump to Results</h5>
                <ul className="list-group">
                  {props.filter.campsites === true ? (
                    <li className="list-group-item">
                      <a href="#camping-results">Camping</a>
                    </li>
                  ) : (
                    <div />
                  )}
                  {props.filter.hotsprings === true ? (
                    <li className="list-group-item">
                      <a href="#hotsprings-results">Hotsprings</a>
                    </li>
                  ) : (
                    <div />
                  )}
                  {props.filter.hiking === true ? (
                    <li className="list-group-item">
                      <a href="#hiking-results">Hiking</a>
                    </li>
                  ) : (
                    <div />
                  )}
                  {props.filter.biking === true ? (
                    <li className="list-group-item">
                      <a href="#biking-results">Biking</a>
                    </li>
                  ) : (
                    <div />
                  )}
                  {props.filter.climbing === true ? (
                    <li className="list-group-item">
                      <a href="#climbing-results">Climbing</a>
                    </li>
                  ) : (
                    <div />
                  )}
                  <li className="list-group-item">
                    <a href="#results">
                      Back to Top
                      <img
                        src={upArrow}
                        style={{ width: "20px", paddingLeft: "10px" }}
                        alt="button to scroll to top of page"
                      />
                    </a>
                  </li>
                </ul>
              </Scrollspy>

              <IndexedDBModal />
            </section>
          </Col>
        ) : (
          <div className="col-12">
            <Row>
              <h2 className="col-12" style={{ textAlign: "center" }}>
                Search by city to start planning your trip!
                <img
                  src={tent}
                  style={{ width: "30px" }}
                  alt="campground icon"
                />
              </h2>
            </Row>
          </div>
        )}

        <Col size="md-6 sm-12 lg-5">
          <div id="results">
            <section id="camping-results">
              <CampingData
                filter={props.filter.campsites}
                data={props.results.campsites}
                handleFormSubmit={handleFormSubmit}
              />
            </section>
            <section id="hotsprings-results">
              <HotspringsData
                filter={props.filter.hotsprings}
                data={props.results.hotsprings}
              />
            </section>
            <section id="hiking-results">
              <HikingData
                filter={props.filter.hiking}
                data={props.results.hiking}
              />
            </section>
            <section id="biking-results">
              <BikingData
                filter={props.filter.biking}
                data={props.results.biking}
              />
            </section>
            <section id="climbing-results">
              <ClimbingData
                filter={props.filter.climbing}
                data={props.results.climbing}
              />
            </section>
          </div>
        </Col>
        <Col size="md-6 sm-12 lg-5">
          {props.results.campsites.length > 0 ? (
            <Map results={props.results.campsites} location={props.location} />
          ) : (
            <div />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default SearchResults;
