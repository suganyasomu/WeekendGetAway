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

function ClimbinData(props) {
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

  // Add biking info to indexedDB
  function handleClimb(activity, name, rating, lat, lng, type) {
    add({
      activity: activity,
      name: name,
      lat: lat,
      lng: lng,
      type: type,
      rating: rating,
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
          <h3>Rock Climbing</h3>
          {props.data.map((res, index) => {
            let id = index + 1;
            return (
              <div key={res.id} style={{ padding: '20px' }}>
                <Row>
                  <Col size="md-12">
                    <Card className="climbingCard" style={{ width: "auto", boxShadow: "2px 2px 5px grey" }}>
                    <img className="card-img-top" src={res.image} />
                      <Card.Body>
                        {currentUser ? (
                          <span
                            onClick={() => {
                              handleHeartBtn();
                              {
                                handleClimb(
                                  res.activity,
                                  res.name,
                                  res.rating,
                                  res.lat,
                                  res.lng,
                                  res.type
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
                        <Card.Title><strong>Name:</strong> {res.name}</Card.Title>
                        <Card.Text><strong>Type:</strong> {res.type}</Card.Text>
                        <Card.Text><strong>Rating:</strong> {res.rating} </Card.Text>
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

export default ClimbinData;
