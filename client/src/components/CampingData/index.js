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
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function CampingData(props) {
  console.log(props);

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);
  const { search } = useContext(SearchContext);
  const { submitted } = useContext(SubmitBtnContext);

  // const [heart, setHeart] = useState(false);

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
              <div key={id} style={{ paddingBottom: "20px"}}>
                <Row>
                  <Col size="md-8">
                  <Accordion>
                    <Card className="campsiteCard" style={{ width: "auto", boxShadow: " 0 4px 8px grey"}}>
                      <Card.Body>
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
                        <Card.Title> Campsite: {res.name} </Card.Title>

                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Click me for more info!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Text> <Description description={res.description} /> </Card.Text>
                        </Accordion.Collapse>

                        <Card.Text> Reservable: {res.reservable ? "Yes" : "No"} </Card.Text>
                        {/* <Card.Text> Fee: <Fee description={res.fee} /> </Card.Text> */}
                        <Card.Text> Phone Number: {res.phone} </Card.Text>
                        <Card.Link href="">Campsite Link</Card.Link>
                      </Card.Body>
                    </Card>
                    </Accordion>
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
