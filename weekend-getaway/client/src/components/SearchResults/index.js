import React, { useState } from"react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchResults(props) {
    console.log(props);

    return (
        <div>
            <h3>Campites for: {props.searched}</h3>
            
            {props.results.map((res, index) => {
                let id = index+1;
                    return (
                        <Card key={id} className="campsiteCard" style={{ width: '30rem' }}>
                            <Card.Body>
                                {props.userStatus ? (
                                    <button className="btn saveBtn" title="Save to Itinerary"> <FontAwesomeIcon icon="heart" size="lg" /> </button> 
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
