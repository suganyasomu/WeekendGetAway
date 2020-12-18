import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import Row from "../components/Row";

function Directions({ location }) {
  // console.log(location.coordinates);
  const [directions, setDirections] = useState({});

  // object to send to
  let coordinates = {
    campLat: location.coordinates.lat,
    campLon: location.coordinates.lon,
    userLat: parseFloat(getCookie("lat")),
    userLon: parseFloat(getCookie("lon")),
  };
  // console.log(coordinates);

  useEffect(() => {
    geoFindMe();
    getDirections();
  }, []);

  // Get pass coordinates to backend & get directions
  function getDirections() {
    console.log(coordinates);

    API.getDirections(coordinates)
      .then((res) => console.log(res.data))
      // .then(res => setDirections(res.data) )
      .catch((err) => console.log(err));
  }

  //Get user's geolocation
  function geoFindMe() {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      document.cookie = `lat=${latitude}`;
      document.cookie = `lon=${longitude}`;
    }

    function error() {
      alert("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      // console.log('Locating…');

      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  return (
    <div className="container">
      <Row>
        <h3> Directions </h3>
      </Row>
    </div>
  );
}

export default Directions;
