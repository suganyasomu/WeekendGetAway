import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Auth.js";
import SearchContext from "../../utils/SearchContext";
import SubmitBtnContext from "../../utils/SubmitBtnContext";
import Card from "react-bootstrap/Card";
import Col from "../Col";
import Row from "../Row";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heartEmpty from "../../Assets/heart-empty.svg";
import heartSolid from "../../Assets/heart-solid.svg";
import LoginModal from "../LoginModal";
import Description from "../Description";
import Fee from "../Fee";
import $ from "jquery";
import ReactTextCollapse from "react-text-collapse";
import { useIndexedDB } from "react-indexed-db";
import IndexedDBContext from "../../utils/IndexedDBContext";

function CampingData(props) {
  // console.log(props);

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);
  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);
  const { deleteRecord, getByIndex } = useIndexedDB("activity");
  const updateIBD = useContext(IndexedDBContext);

  const TEXT_COLLAPSE_OPTIONS = {
    collapse: true, // default state when component rendered
    collapseText: "... show more", // text to show when collapsed
    expandText: "show less", // text to show when expanded
    minHeight: 100, // component height when closed
    maxHeight: 450,
    textStyle: {
      // pass the css for the collapseText and expandText here
      color: "blue",
      fontSize: "16px",
    },
  };

  // let handleHeartBtn = (e) => {
    function handleHeartBtn(e, activity, name){
    // console.log(e.target);

    // Use jQuery to update the image src
    if ($(e.target).attr("src") === heartEmpty) {
      $(e.target).attr("src", heartSolid);
    } else {
      // undo save & remove from IndexedDB
      $(e.target).attr("src", heartEmpty);

      // Get IndexDB key with matching activity & name selected & delete it from DB
      let IDBkey;
      getByIndex('name', name).then(
        res => {
          IDBkey = res.id;
        },
        error => {
          console.log(error);
        }
      )

      console.log("IDBkey: " + IDBkey);

      // deleteRecord( IDBkey).then(
      //   (event) => {
      //     console.log("Unsaved from IndexedDB");
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
    }
  };

  return (
    <div>
      {props.filter && submitted ? (
        <div>
          <h3>Campites </h3>

          {props.data.map((res, index) => {
            // console.log(res);
            // let id = res.id;
            return (
              <div key={res.id} style={{ padding: "20px" }} id={res.id}>
                <Row>
                  <Card
                    className="campsiteCard"
                    style={{ width: "100%", boxShadow: "2px 2px 5px grey" }}
                  >
                    <Card.Header>
                      <strong>Campsite:</strong> {res.name}
                      {currentUser ? (
                        <span>
                          <img
                            src={heartEmpty}
                            style={{ width: "30px" }}
                            id={res.id}
                            onClick={(index) => {
                              // handleHeartBtn(index, res.activity, res.name);
                              updateIBD.onClick([index]);
                              {
                                props.handleFormSubmit(
                                  res.name,
                                  res.lat,
                                  res.lng,
                                  res.reservable,
                                  res.fee,
                                  res.phone,
                                  res.activity,
                                  res.description
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
                    </Card.Header>

                    <Card.Body>
                      <span>
                        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                          <Description description={res.description} />
                        </ReactTextCollapse>
                      </span>
                      <br />
                      <Card.Text>
                        {" "}
                        <strong>Reservable:</strong>{" "}
                        {res.reservable ? "Yes" : "No"}{" "}
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <strong>Fee:</strong> <Fee fee={res.fee} />{" "}
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        <strong>Phone Number:</strong> {res.phone}{" "}
                      </Card.Text>
                      {/* <Card.Link href="#">Campsite Link</Card.Link> */}
                    </Card.Body>
                  </Card>
                </Row>
              </div>
            );
          })}
        </div>
      ) : (
        <span> </span>
      )}
    </div>
  );
}

export default CampingData;
