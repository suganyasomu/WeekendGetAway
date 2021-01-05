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
import $ from "jquery";
// import { handleInputChange } from "react-select/src/utils";
import IndexedDBContext from "../../utils/IndexedDBContext";

function HotspringsData(props) {
  const { currentUser } = useContext(AuthContext);
  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);
  const { add } = useIndexedDB("activity");
  const updateIBD = useContext(IndexedDBContext);

  let handleHeartBtn = (e) => {
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
            let id=res.id;
            return (
              <div key={res._id} style={{ padding: '20px' }}>
                <Row>
                  <Col size="md-6">
                    <Card className="hotspringCard" style={{ width: "auto", boxShadow: "2px 2px 5px grey" }}>
                      <Card.Header>
                        {currentUser ? (
                          <span>
                            <img
                              src={ heartEmpty }
                              style={{ width: "30px" }}
                              id={id}
                              onClick={(index) => {
                                handleHeartBtn(index);
                                updateIBD.onClick([index]);
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
