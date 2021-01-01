import React, { useState, useContext } from "react";
import "./style.css";
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
import HikingData from "../HikingData";
import BikingData from "../BikingData";
import ClimbingData from "../ClimbingData";
import Scrollspy from 'react-scrollspy'

function SearchResults(props) {
  // console.log(props);

  const { search } = useContext(SearchContext);
  const [save, setState] = useState([]);
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
          <Row>
            <WeatherData
              filter={props.filter.weather}
              weatherCondition={props.weatherCondition}
            />

            <Col size="md-2">
            {search ? (
              <Scrollspy className="scrollspy" items={ ['camping-results', 'hotsprings-results', 'hiking-results', 'biking-results', 'climbing-results'] } currentClassName="is-current">
              <h5>Jump to Results</h5>
              <ul className="list-group">
                {props.filter.campsites == true ? (<li class="list-group-item"><a href="#camping-results">Camping</a></li>) : ( <div/>)}
                {props.filter.hotsprings == true ? (<li class="list-group-item"><a href="#hotsprings-results">Hotsprings</a></li>) : ( <div/>)}
                {props.filter.hiking == true ? (<li class="list-group-item"><a href="#hiking-results">Hiking</a></li>) : ( <div/>)}
                {props.filter.biking == true ? (<li class="list-group-item"><a href="#biking-results">Biking</a></li>) : ( <div/>)}
                {props.filter.climbing == true ? (<li class="list-group-item"><a href="#climbing-results">Climbing</a></li>) : ( <div/>)}
              </ul>
            </Scrollspy>
                ) : (
                  <div />
                )}

            </Col>
            <Col size="md-6">
              <div id="results">
              <section id="camping-results">
              <CampingData
                filter={props.filter.campsites}
                data={props.results.campsites}
                handleFormSubmit={handleFormSubmit}
              />
              {props.filter.campsites == true ? (<p><a href="#results">Back to Top</a></p>) : ( <div/>)}
              </section>
              <section id="hotsprings-results">
              <HotspringsData
                filter={props.filter.hotsprings}
                data={props.results.hotsprings}
              />
              {props.filter.hotsprings == true ? (<p><a href="#results">Back to Top</a></p>) : ( <div/>)}
              </section>
              <section id="hiking-results">
              <HikingData
                filter={props.filter.hiking}
                data={props.results.hiking}
              />
              {props.filter.hiking == true ? (<p><a href="#results">Back to Top</a></p>) : ( <div/>)}
              </section>
              <section id="biking-results">
              <BikingData
                filter={props.filter.biking}
                data={props.results.biking}
              />
              {props.filter.biking == true ? (<p><a href="#results">Back to Top</a></p>) : ( <div/>)}
              </section>
              <section id="climbing-results">
              <ClimbingData
                filter={props.filter.climbing}
                data={props.results.climbing}
              />
              {props.filter.climbing == true ? (<p><a href="#results">Back to Top</a></p>) : ( <div/>)}
              </section>
              </div>
            </Col>
            <Col size="md-4">
              <Aside>
                {props.results.campsites.length > 0 ? (
                  <Map
                    results={props.results.campsites}
                    location={props.location}
                  />
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
