import React, { useState } from"react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from "../../utils/API";

function SearchResults(props) {
    // console.log(props);

    const [save, setState] = useState([]);

    // Save campsite info to DB
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("save button was clicked!");
        // setState();

        // Save selected campsite to DB
        API.saveToItinerary({
            campsite: {save}
        })
        .then(res => console.log("Save campsite to database!") )
        .catch(err => console.log(err));

    };

    return (
        <div>
            <h3>Campites for: {props.searched}</h3>
            
            {props.results.map((res, index) => {
                let id = index+1;
                return (
                    <Card key={id} className="campsiteCard" style={{ width: '30rem' }}>
                        <Card.Body>
                            {props.userStatus ? (
                                <button onClick={handleFormSubmit} className="btn saveBtn" title="Save to Itinerary"> <FontAwesomeIcon icon="heart" size="lg" /> </button> 
                            ) : (
                                <span>  </span> 
                            )}
                            <Card.Title> Campsite: {res.name} </Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                {/* Description: {res.description} */}
                            </Card.Text>
                            <Card.Text> Reservable: {res.reservable} </Card.Text>
                            <Card.Text> Fee: {res.fee} </Card.Text>
                            <Card.Text> Phone Number: {res.phone} </Card.Text>
                            <Card.Link href="#">Campsite Link</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })} 
        </div>

    );
}

export default SearchResults;
