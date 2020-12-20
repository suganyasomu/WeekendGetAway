import React, { useState, useEffect, useCallback, useContext } from "react";
// import { withRouter, Redirect } from "react-router";
import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";
import app from "../base";
import firebase from "firebase";
import { AuthContext } from "../Auth.js";
import API from "../utils/API";
import Save from "../components/SavedBtn";

function Home() {
  // initialize state variables
  const [search, setSearch] = useState("");
  const [campsites, setCampsites] = useState([]);
  const [hotspring, setHotsprings] = useState([]);
  const [weather, setWeather] = useState([]);

  const [filter, setFilter] = useState({
    hotsprings: false,
    campsites: true,
    weather: false,
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
  }
  
  //getHotsprings
  function searchHotsprings(query) {
    // console.log(query);

    API.getHotspring(query)
      // .then((res) => console.log(res.data))
      .then(function (res) {
        console.log(res)
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
          console.log(res.data)
          setWeather(res.data);
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
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(search);
    // send the searched term to the function
    if (search === "") {
      alert("Please enter a city");
    } else {
      getFilter(search);
    }
    console.log(campsites);
  };

  function signout() {
    app
      .auth()
      .signOut()
      .then(function () {
        window.location = "/login";
        alert("You have logged out");
      })
      .catch(function (error) {
        console.log(error);
        // An error happened.
      });
  }

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
              <button className="btn btn-outline-secondary" onClick={signout}>
                Sign out
              </button>
            </div>
          )}
        </div>

        <div className="row">
          <section className="col-12">
            <h3>Search: </h3>
            <SearchContainer
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              results={search}
            />
            <hr />
          </section>
        </div>

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
            />
          </section>
        </div>
        <Save />
      </div>
    </div>
  );
}

export default Home;
