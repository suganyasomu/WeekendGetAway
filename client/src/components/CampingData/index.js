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

function CampingData(props) {
  console.log(props);

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);
  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);

  // const [heart, setHeart] = useState(false);

  const TEXT_COLLAPSE_OPTIONS = {
    collapse: true, // default state when component rendered
    collapseText: '... show more', // text to show when collapsed
    expandText: 'show less', // text to show when expanded
    minHeight: 100, // component height when closed
    maxHeight: 450,
    textStyle: { // pass the css for the collapseText and expandText here
      color: "blue",
      fontSize: "16px"
    }
  }

  let handleHeartBtn = (e) => {
    let heartId = e.target.id;
    console.log(e.target);
    console.log(heartId);
    console.log(e.target.src);

    // Use jQuery to update the image src
    $(heartId).attr("src", {heartSolid} );

  }


  return (
    <div>
      {props.filter && submitted ? (
        <div>
          <h3>Campites </h3>

          {props.data.map((res, index) => {
            let id = index + 1;
            return (
              <div key={id}>
                <Row>
                  <Col size="md-6">
                    <Card className="campsiteCard" style={{ width: "30rem" }}>
                      <Card.Header>
                        {currentUser ? (
                          <img
                            src={ heartEmpty }
                            style={{ width: "30px" }}
                            id={id}
                            onClick={(id) => {
                              handleHeartBtn(id);
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
                          >
                            {/* <img
                              src={true ? heartSolid : heartEmpty}
                              style={{ width: "30px" }}
                            /> */}
                          </img>
                        ) : (
                          <LoginModal />
                        )}
                          <Card.Title> <strong>Campsite:</strong> {res.name} </Card.Title>
                        </Card.Header>
                        <Card.Body>
                          <span>
                            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                              <Description description={res.description} /> 
                            </ReactTextCollapse>
                          </span>
                        <br/>
                        <Card.Text> <strong>Reservable:</strong> {res.reservable} </Card.Text>
                        <Card.Text> <strong>Fee:</strong> <Fee description={res.fee} /> </Card.Text>
                        <Card.Text> <strong>Phone Number:</strong> {res.phone} </Card.Text>
                        <Card.Link href="#">Campsite Link</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
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
