import React, { useState, useContext } from "react";
import { AuthContext } from "../../Auth.js";
import SearchContext from "../../utils/SearchContext";
import SubmitBtnContext from "../../utils/SubmitBtnContext";
import Card from "react-bootstrap/Card";
import Col from "../Col";
import Row from "../Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heartEmpty from "../../Assets/heart-empty.svg";
import heartSolid from "../../Assets/heart-solid.svg";
import LoginModal from "../LoginModal";
import { propTypes } from "react-bootstrap/esm/Image";
import { useIndexedDB } from "react-indexed-db";
// import { handleInputChange } from "react-select/src/utils";

function HotspringsData(props) {
  const { currentUser } = useContext(AuthContext);
  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);
  const { add } = useIndexedDB("activity");
  const [heart, setHeart] = useState(false);

  function handleHeartBtn() {
    if (heart === true) {
      setHeart(false);
    } else {
      setHeart(true);
    }
  }
  // Add campsite info to indexedDB
  function handleHotsprings(
    hotspring,
    temperature,
    coordinate,
    usgs_quadrangle
  ) {
    add({
      activity: "hotspring",
      name: hotspring,
      lat: coordinate[1],
      lng: coordinate[0],
      temperature: temperature,
      usgs_quadrangle: usgs_quadrangle,
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
    <div>
      {props.filter && submitted ? (
        <section style={{ width: "100%" }}>
          <h3>Hotsprings</h3>
          {props.data.map((res, index) => {
            return (
              <div key={res._id} style={{ paddingBottom: '20px' }}>
                <Row>
                  <Col size="md-6">
                    <Card className="hotspringCard" style={{ width: "30rem", boxShadow: "2px 2px 5px grey" }}>
                      <Card.Header>
                        {currentUser ? (
                          <span
                            onClick={() => {
                              handleHeartBtn();
                              {
                                handleHotsprings(
                                  res.spring_name,
                                  res.degrees_f,
                                  res.loc.coordinates,
                                  res.usgs_quadrangle
                                );
                              }
                            }}
                            className="saveBtn"
                            title="Save to Itinerary"
                          >
                            <img
                              src={heart ? heartSolid : heartEmpty}
                              style={{ width: "30px" }}
                            />
                          </span>
                        ) : (
                          <LoginModal />
                        )}
                        <Card.Title><strong>Name:</strong> {res.spring_name}</Card.Title>
                      </Card.Header>
                      <Card.Body>
                          <Card.Text><strong>Average Temp:</strong> {res.degrees_f}°</Card.Text>
                          <Card.Text><strong>Coordinates to spring:</strong> {res.loc.coordinates[1]}°N, {res.loc.coordinates[0]}°W </Card.Text>
                          <Card.Text><strong>USGS_Quadrangle:</strong> {res.usgs_quadrangle}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            );
          })}
        </section>
      ) : (
        <span> </span>
      )}
    </div>
  );
}

export default HotspringsData;
