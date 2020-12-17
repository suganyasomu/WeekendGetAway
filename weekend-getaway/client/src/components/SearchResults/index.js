import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "../../utils/API";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../Map";
import Aside from "../Aside";
import Col from "../Col";
import Row from "../Row";
import Dates from "../Dates";
import Checkbox from "../Checkbox";

function SearchResults(props) {
  // console.log(props);

  const [save, setState] = useState([]);
  const [filter, setFilter] = useState({
    hotsprings: false,
    campsites: false,
    weather: false,
  });

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    console.log(checked);
    setFilter({
      ...filter,
      [name]: checked,
    });
    // run api call if checked is true for that filter state property
    // if(checked && name ==="campsites"){
    //   API.getCampsites(query)
    //   // .then((res) => console.log(res.data))
    //   .then(function (res) {
    //     setCampsites(res.data);
    //   })
    //   .catch((err) => console.log(err));
    // }
    // else if(checked && name ==="hotsprings"){

    // }else if{

    // }
  }
  // Save campsite info to DB
  function handleFormSubmit(campsite) {
    // event.preventDefault();
    // console.log(campsite);

    // const { name, value } = event.target;
    // setState({...save, campsite: campsite})

    // console.log(save.campsite);
    console.log("save button was clicked!");
    console.log(props.userStatus.uid);
    // setState();

    // Save selected campsite to DB
    API.saveToItinerary({
      user: props.userStatus.uid,
      campsite: campsite,
    })
      .then((res) => console.log("Save campsite to database!"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Dates />

      <div className="row">
        <div className="resultsContainer">
          <h3>Campites for: {props.searched}</h3>
          <Row>
            <Col size="md-3">
              <Checkbox
                name="hotsprings"
                checked={filter.hotsprings}
                handleCheckboxChange={handleCheckboxChange}
              />

              <Checkbox
                name="campsites"
                value={filter.campsites}
                handleCheckboxChange={handleCheckboxChange}
              />

              <Checkbox
                name="weather"
                value={filter.weather}
                handleCheckboxChange={handleCheckboxChange}
              />
            </Col>
            <Col size="md-6">
              {props.results.map((res, index) => {
                let id = index + 1;
                return (
                  <div>
                    <Row>
                      <Col size="md-6">
                        <Card
                          key={id}
                          className="campsiteCard"
                          style={{ width: "30rem" }}
                        >
                          <Card.Body>
                            {props.userStatus ? (
                              <div
                                onClick={() => handleFormSubmit(res.name)}
                                data-campsite={res.name}
                                className="btn saveBtn"
                                title="Save to Itinerary"
                              >
                                <FontAwesomeIcon icon="heart" size="lg" />
                              </div>
                            ) : (
                              <span> </span>
                            )}
                            <Card.Title> Campsite: {res.name} </Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                              {/* Description: {res.description} */}
                            </Card.Text>
                            <Card.Text>
                              {" "}
                              Reservable: {res.reservable}{" "}
                            </Card.Text>
                            <Card.Text> Fee: {res.fee} </Card.Text>
                            <Card.Text> Phone Number: {res.phone} </Card.Text>
                            <Card.Link href="#">Campsite Link</Card.Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Col>
            <Col size="md-3">
              <Aside>
                {props.results.length > 0 ? (
                  <Map results={props.results} />
                ) : (
                  <div />
                )}
              </Aside>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
