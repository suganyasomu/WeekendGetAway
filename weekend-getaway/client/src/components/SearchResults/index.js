import React, { useState } from"react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from "../../utils/API";
import $ from "jquery";

function SearchResults(props) {
    // console.log(props);

    const [save, setState] = useState({
        campsite: ""
    }
    );

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setState({...save, [name]: value})
    //   };

    // Save campsite info to DB
    function handleFormSubmit(campsite) {
        // event.preventDefault();
        console.log(campsite);

        // const { name, value } = event.target;
        // setState({...save, campsite: campsite})

        // console.log(save.campsite);
        console.log("save button was clicked!");
        console.log(props.userStatus.uid);
        // setState();

        // Save selected campsite to DB
        API.saveToItinerary({
            user: props.userStatus.uid,
            campsite: campsite
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
                                <div onClick={() => handleFormSubmit(res.name)} data-campsite={res.name} className="btn saveBtn" title="Save to Itinerary"> 
                                <FontAwesomeIcon  icon="heart" size="lg" /> 
                                </div> 
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
