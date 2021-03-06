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
import IndexedDBContext from "../../utils/IndexedDBContext";
import "./style.css";
import $ from "jquery";
// import { handleInputChange } from "react-select/src/utils";

function HikingData(props) {
  const { currentUser } = useContext(AuthContext);
  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);
  const { add } = useIndexedDB("activity");
  const updateIBD = useContext(IndexedDBContext);

  let handleHeartBtn = (e) => {
    console.log(e.target);

    // Use jQuery to update the image src
    if( $(e.target).attr('src') === heartEmpty) {
      $(e.target).attr("src", heartSolid );
    }
    else {
      // undo save & remove from IndexedDB
      $(e.target).attr("src", heartEmpty );

      // deleteRecord( ).then(
      //   (event) => {
      //     console.log("Unsaved");
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );

    }
  }

  // Add hiking info to indexedDB
  function handleHikes(activity, name, summary, difficulty, lat, lng, length, elevationChange) {
    add({
      activity: activity,
      name: name,
      lat: lat,
      lng: lng,
      length: length,
      difficulty: difficulty,
      elevationChange: elevationChange,
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
      {props.filter && submitted ? (
        <section style={{ width: "100%" }}>
          <h3>Hikes</h3>
          {props.data.map((res, index) => {
            // console.log(index);
            let id=res.id;
            return (
              <div key={id} style={{ padding: "20px" }}>
                <Row>
                  <Col size="md-12">
                    <Card
                      className="hikingsCard"
                      style={{ width: "auto", boxShadow: "2px 2px 5px grey" }}
                    >
                      <div className="inner">
                        <img className="card-img-top" src={res.image} />
                      </div>
                      <Card.Body>
                        {currentUser ? (
                          <span>
                            <img
                              src={ heartEmpty }
                              style={{ width: "30px" }}
                              id={id}
                              onClick={(index) => {
                                // handleHeartBtn(index);
                                updateIBD.onClick([index]);
                                {
                                  handleHikes(
                                    res.activity,
                                    res.name,
                                    res.summary,
                                    res.difficulty,
                                    res.lat,
                                    res.lng,
                                    res.length,
                                    res.elevationChange
                                  );
                                }
                              }}
                            className="saveBtn"
                            title="Save to Itinerary"
                          />
                          </span>
                        ) : (
                          <LoginModal />
                        )}
                        <Card.Title>
                          {" "}
                          <strong>Name:</strong> {res.name}{" "}
                        </Card.Title>
                        <Card.Text>
                          {" "}
                          <strong>Difficulty:</strong> {res.difficulty}{" "}
                        </Card.Text>

                        <Card.Text>
                          {" "}
                          <strong>Summary:</strong> {res.summary}{" "}
                        </Card.Text>
                        <Card.Text>
                          {" "}
                          <strong>Length:</strong> {res.length} miles
                        </Card.Text>
                        <Card.Text>
                          {" "}
                          <strong>Trail Condition:</strong> {res.condition}
                        </Card.Text>
                        <Card.Text>
                          {" "}
                          <strong>Elevation Change:</strong>{" "}
                          {res.elevationChange} ft
                        </Card.Text>
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
