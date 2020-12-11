import React, { useState, useEffect, useCallback, useContext } from "react";
// import { withRouter, Redirect } from "react-router";
import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";
import app from "../base";
import firebase from "firebase";
import { AuthContext } from "../Auth.js";
import API from "../utils/API";

function Home() {
  // initialize state variables
  const [search, setSearch] = useState("");
  const [campsites, setCampsites] = useState([]); // just campsite name for now

  // Mount initial info
  // useEffect( () => {

  // });

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);

  // Search API's base on  user input (campsite)
  function searchCampsites(query) {
    // console.log(query);

    API.getCampsites(query)
      // .then((res) => console.log(res.data))
      .then((res) => setCampsites(res.data))
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
      searchCampsites(search);
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

          <span className="col-8">  </span>
          <span className="col-2"> 
            {currentUser ? (
              <p> You are logged in! </p> 
            ) : (
              <p> Guest - Login to Save to your Itinerary </p> 
            )}
          </span>
          <div className="col-2">
            <button className="btn btn-outline-secondary" onClick={signout}>
              Sign out
            </button>
          </div>
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
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
