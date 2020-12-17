import React, {useState, useEffect, useContext} from"react";
import API from "../utils/API";
import Row from "../components/Row";

function Directions(props) {
    console.log(props);

    // Get lat/lon from the selected campsite
    function campsiteLocation() {
        console.log("Campsite - Lat: " + " Lon: ");

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
            alert('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            // console.log('Locating…');

            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function userLocation() {
        geoFindMe(); // get user's geolocation 
        let lat = getCookie("lat");
        let lon = getCookie("lon");
        console.log("User - Lat: " + lat + " Lon: " + lon);

        API.sendGeolocation(lat, lon)
        .then(res => console.log("successfully sent geolocation to backend!") )
        .catch(err => console.log(err));
        
    }
        
    userLocation();
    campsiteLocation();

    return (
        <div className="container">
            <Row>
                <h3> Directions </h3>
            </Row>
        </div>

    );
}

export default Directions;