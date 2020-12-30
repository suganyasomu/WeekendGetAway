import React, { useState, useContext } from "react";
import { AuthContext } from "../../Auth.js";
import SearchContext from "../../utils/SearchContext";
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

function HikingData(props) {
  const { currentUser } = useContext(AuthContext);
  const { search } = useContext(SearchContext);
  const { add } = useIndexedDB("activity");
  const [heart, setHeart] = useState(false);

  function handleHeartBtn() {
    if (heart === true) {
      setHeart(false);
    } else {
      setHeart(true);
    }
  }

  // Add hiking info to indexedDB
    function handleHikes(
      activity,
      name,
      summary,
      difficulty,
      lat,
      lng,
      length
    ) {
      add({
        activity: activity,
        name: name,
        lat: lat,
        lng: lng,
        length: length,
        difficulty: difficulty,
        summary: summary,
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
      {props.filter ? (
        <section style={{ width: "100%" }}>
          <h3>Hikings data for: {search}</h3>
          {props.data.map((res, index) => {
            console.log(index);
            let id = index + 1;
            return (
              <div key={id}>
                <Row>
                  <Col size="md-6">
                    <Card className="hikingsCard" style={{ width: "30rem" }}>
                      <Card.Body>
                        {currentUser ? (
                          <span
                            onClick={() => {
                              handleHeartBtn();
                              {
                                handleHikes(
                                  res.activity,
                                  res.name,
                                  res.summary,
                                  res.difficulty,
                                  res.lat,
                                  res.lng,
                                  res.length
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
                        <Card.Text> Name: {res.name} </Card.Text>
                        <Card.Text> Difficulty: {res.difficulty} </Card.Text>

                        <Card.Text> Summary: {res.summary} </Card.Text>
                        <Card.Text> Length: {res.length} miles</Card.Text>
                        <Card.Text> Trail Condition: {res.condition}</Card.Text>
                        <Card.Text>
                          {" "}
                          Elevation Change: {res.elevationChange} ft
                        </Card.Text>
                        <img src={res.image} style={{ width: "50px" }} />
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

export default HikingData;
