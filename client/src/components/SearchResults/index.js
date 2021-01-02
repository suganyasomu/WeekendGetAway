import React, { useState, useContext, useEffect } from "react";
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
// import Section from "../Section"
// import { Last } from "react-bootstrap/esm/PageItem";
import { useIndexedDB } from "react-indexed-db";
import CampingData from "../CampingData";
import WeatherData from "../WeatherData";
import HotspringsData from "../HotspringsData";
import HikingData from "../HikingData";
import BikingData from "../BikingData";
import ClimbingData from "../ClimbingData";
import IndexedDBContext from "../../utils/IndexedDBContext";

function SearchResults(props) {
  // console.log(props);

  const { search } = useContext(SearchContext);
  const [save, setState] = useState([]);
  const { add, getAll, clear } = useIndexedDB("activity");
  const { indexeddb } = useContext(IndexedDBContext);
  const [indexedDBState, setindexedDBState] = useState({
    indexeddb: []
  });

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
        updateContext();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  // update the context with info from IndexedDB
  async function updateContext() { 
    let activities = await getAll();
    // console.log(activities);

    setindexedDBState({ 
      ...indexedDBState,
      indexeddb: activities 
    });
    // console.log(indexedDBState);
    // console.log(indexedDBState.indexeddb);

  }
  
  return (
    <div className="container resultsContainer">
      <hr></hr>
      <div className="row">
        <div className="results">
          <Row>
            <WeatherData
              filter={props.filter.weather}
              weatherCondition={props.weatherCondition}
            />
            <Col size="sm-8">
              <CampingData
                filter={props.filter.campsites}
                data={props.results.campsites}
                handleFormSubmit={handleFormSubmit}
              />
              <HotspringsData
                filter={props.filter.hotsprings}
                data={props.results.hotsprings}
              />
              <HikingData
                filter={props.filter.hiking}
                data={props.results.hiking}
              />
              <BikingData
                filter={props.filter.biking}
                data={props.results.biking}
              />
              <ClimbingData
                filter={props.filter.climbing}
                data={props.results.climbing}
              />
            </Col>
            <Col size="sm-4">
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
