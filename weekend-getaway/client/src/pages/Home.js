import React, { useState, useEffect, useCallback, useContext } from "react";
// import { withRouter, Redirect } from "react-router";
import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";
// import firebase from "firebase";
import { AuthContext } from "../Auth.js";
import API from "../utils/API";
import Save from "../components/SavedBtn";
import Dates from "../components/Dates";
import SignoutBtn from "../components/SignoutBtn";

function Home() {
  // initialize state variables
  let results = {};
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campsites, setCampsites] = useState([]);
  const [hotspring, setHotsprings] = useState([]);
  const [weather, setWeather] = useState([]);
  const [hiking, setHiking] = useState([]);
  const [cityCoords, setCityCoords] = useState({});

  const [filter, setFilter] = useState({
    hotsprings: false,
    campsites: true,
    weather: false,
    hiking: false,
  });

  function handleCheckbox(event) {
    const { name, checked } = event.target;
    console.log(name);
    console.log(checked);
    setFilter({
      ...filter,
      [name]: checked,
    });
    console.log("from home page");
    console.log(filter);
  }

  function getFilter() {
    searchLocation(search);

    if (filter.campsites === true) {
      searchCampsites(search);
      console.log("campsites in called");
    }
    if (filter.hotsprings === true) {
      searchHotsprings(search);
      console.log("Hotspring is called");
    }
    if (filter.weather === true) {
      searchWeather(search);
      console.log("Weather is called");
    }
    if (filter.hiking === true) {
      searchHiking(search);
      console.log("Hiking is called");
    }
  }

  // Get location City and State
  function searchLocation(query) {
    API.getLocation(query)
      .then((res) => {
        let cityState = res.data.location.city + ", " + res.data.location.state;
        let cityCoords = res.data.latLng;

        console.log("location:" + cityCoords);

        setSearch(cityState);
        setCityCoords(cityCoords);
      })
      .catch((err) => console.log(err));
  }

  //getHotsprings
  function searchHotsprings(query) {
    // console.log(query);

    API.getHotspring(query)
      // .then((res) => console.log(res.data))
      .then(function (res) {
        console.log(res);
        setHotsprings(res.data);
      })
      .catch((err) => console.log(err));
  }

  //getWeather
  function searchWeather(query) {
    // console.log(query);

    API.getWeather(query)
      // .then((res) => console.log(res.data))
      .then(function (res) {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Search for hiking trails
  function searchHiking(query) {
    console.log(query);

    API.getHike(query)
      .then((res) => {
        console.log(res.data);
        setHiking(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);

  // Search API's base on  user input (campsite)
  function searchCampsites(query) {
    // console.log(query);

    API.getCampsites(query)
      // .then((res) => console.log(res.data))
      .then(function (res) {
        setCampsites(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // send the searched term to the function
    if (search === "") {
      alert("Please enter a city");
    } else {
      getFilter(search);
    }
    console.log(campsites);
    setCity("");
  };
  
  const handleStartDate = (event) => {
    // console.log(event);
    setStartDate(event);
  };

  const handleEndDate = (event) => {
    // console.log(event);
    setEndDate(event);
  };

  // Set results object
  results.campsites = campsites;
  results.hiking = hiking;

  return (
    <div>
      <div className="container">
        <div className="row">
          <span className="col-8"> </span>

          {currentUser ? (
            <span className="col-2">
              <p> You are logged in! </p>
            </span>
          ) : (
            <span className="col-4">
              <p> Guest - Login to Save to your Itinerary </p>
            </span>
          )}

          {currentUser && (
            <div className="col-2">
              <SignoutBtn />
            </div>
          )}
        </div>

        <div className="row">
          <section className="col-12">
            <h3>Search: </h3>
            <SearchContainer
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              results={city}
            />
            <hr />
          </section>
        </div>
        <Dates handleStartDate={handleStartDate} handleEndDate={handleEndDate} />
        <Save />

        <div className="row">
          <section className="col-12">
            <SearchResults
              searched={search}
              results={campsites}
              userStatus={currentUser}
              filter={filter}
              handleCheckboxChange={handleCheckbox}
              value={search}
              weatherCondition={weather}
              location={cityCoords}
              startDate={startDate}
              endDate={endDate}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
