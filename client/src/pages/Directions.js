import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { useIndexedDB } from "react-indexed-db";
import Row from "../components/Row";
import { Card } from "react-bootstrap";

function Directions() {
  const [directions, setDirections] = useState([]);
  const [campsite, setCampsite] = useState();
  const { getAll } = useIndexedDB("directions");

  useEffect(() => {
    geoFindMe();
    // await getDirections();
  }, []);

  // Get pass coordinates to backend & get directions
  async function getDirections() {
    const campsiteLoc = await getAll();

    setCampsite(campsiteLoc[0].name);

    let coordinates = {
      campLat: campsiteLoc.lat,
      campLon: campsiteLoc.lon,
      userLat: parseFloat(getCookie("lat")),
      userLon: parseFloat(getCookie("lon")),
    };

    API.getDirections(coordinates)
      // .then((res) => console.log(res.data.directions))
      .then((res) => setDirections(res.data.directions))
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
    getDirections();
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  return (
    <div className="container">
      {/* <Row> */}
      <h3> Directions </h3>
      {/* </Row> */}

      <Row>
        <div className="col-2" />
        <Card
          className="col-8"
          style={{
            width: "30rem",
            boxShadow: "2px 2px 5px grey ",
          }}
        >
          <Card.Header>
            {" "}
            <Card.Title>
              {" "}
              <strong>
                {" "}
                Directions to {campsite ? campsite : "your Campsite"}{" "}
              </strong>{" "}
            </Card.Title>{" "}
          </Card.Header>
          {directions.map((res, index) => {
            let id = index + 1;
            return (
              <Card.Body key={id}>
                <Card.Text>
                  <img src={res.turnIcon} style={{ marginRight: "10px" }} />
                  {res.narrative}
                </Card.Text>
                <Card.Subtitle style={{ fontStyle: "italic" }}>
                  {" "}
                  {res.streets}{" "}
                </Card.Subtitle>
              </Card.Body>
            );
          })}
        </Card>
        <div className="col-2" />
      </Row>
    </div>
  );
}

export default Directions;
