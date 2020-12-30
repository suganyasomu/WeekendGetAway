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
    hikeName,
    summary,
    dificulty
  ) {
    add({
      activity: "hiking",
      name: hikeName
      // summary: summary,
      // dificulty: dificulty 
      
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
                                res.difficulty,
                                res.summary
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
                        <Card.Title> Activity: {res.activity.charAt(0).toUpperCase() + res.activity.slice(1)} </Card.Title>
                        <Card.Subtitle> Hike: {res.name} </Card.Subtitle>
                        <Card.Text> Difficulty: {res.difficulty} </Card.Text>
                        <Card.Text> Summary: {res.summary} </Card.Text>
    
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
