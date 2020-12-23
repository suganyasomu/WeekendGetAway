import React, { useContext } from "react";
import { AuthContext } from "../../Auth.js";
import Card from "react-bootstrap/Card";
import Col from "../Col";
import Row from "../Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginModal from "../LoginModal";

function HotspringsData(props) {
    const { currentUser } = useContext(AuthContext);

    return (
        <div>
            {props.filter ? (
                <section style={{ width: "100%" }}>
                    <h3>Hotsprings for: {props.searched}</h3>
                    {props.data.map((res, index) => {
                        return (
                            <div>
                                <Row>
                                    <Col size="md-6">
                                        <Card
                                            key={props._id}
                                            className="hotspringCard"
                                            style={{ width: "30rem" }}
                                        >
                                            <Card.Body>
                                                {currentUser ? (
                                                    <span
                                                        onClick={() =>
                                                            props.handleFormSubmit(
                                                                res.spring_name,
                                                                res.degrees_f,
                                                                res.loc.coordinates,
                                                                res.usgs_quadrangle
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
                                                <Card.Title> Hotspring Name: {res.spring_name} </Card.Title>
                                                <Card.Text>Average Temp: {res.degrees_f}°</Card.Text>
                                                <Card.Text> Coordinates to spring: {res.loc.coordinates[0]}, {res.loc.coordinates[1]} </Card.Text>
                                                <Card.Text>USGS_Quadrangle: {res.usgs_quadrangle}</Card.Text>
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