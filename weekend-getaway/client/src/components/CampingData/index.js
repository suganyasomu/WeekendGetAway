import React, { useContext } from "react";
import { AuthContext } from "../../Auth.js";
import Card from "react-bootstrap/Card";
import Col from "../Col";
import Row from "../Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginModal from "../LoginModal";
import Description from "../Description";
import Fee from "../Fee";

function CampingData(props) {
  // console.log(props);

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      {props.data.map((res, index) => {
        let id = index + 1;
        return (
          <div key={id} >
            <Row>
              <Col size="md-6">
                <Card
                  className="campsiteCard"
                  style={{ width: "30rem" }}
                >
                  <Card.Body>
                    {currentUser ? (
                      <span
                        onClick={() =>
                          props.handleFormSubmit(
                            res.name,
                            res.lat,
                            res.lng,
                            res.reservable,
                            res.fee,
                            res.phone,
                            res.activity,
                            res.description
                          )
                        }
                        className="saveBtn"
                        title="Save to Itinerary"
                      >
                        <FontAwesomeIcon icon="heart" size="lg" />
                      </span>
                    ) : (
                      <LoginModal />
                    )}
                    <Card.Title> Campsite: {res.name} </Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>
                      Description: <Description description={res.description} />
                    </Card.Text>
                    <Card.Text> Reservable: {res.reservable} </Card.Text>
                    <Card.Text>
                      {/* {" "} */}
                      Fee: <Fee description={res.fee} />
                      {/* {" "} */}
                    </Card.Text>
                    <Card.Text> Phone Number: {res.phone} </Card.Text>
                    <Card.Link href="#">Campsite Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default CampingData;
