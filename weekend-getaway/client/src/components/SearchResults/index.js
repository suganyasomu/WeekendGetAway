import React, { useState } from"react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchResults(props) {
    // console.log(props);

    const [save, setState] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


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

    // function parseStartDates(start) {
    //     // setStartDate(start);

    //     let month = start.getMonth() + 1; //months from 1-12
    //     let day = start.getDate();
    //     let year = start.getFullYear();
    //     let newStart = year + "/" + month + "/" + day;
    //     setStartDate(newStart);

    //     console.log(startDate);

    // }

    return (
        <div className="container">
            <div className="row">
                <section className="col-6">
                    <span> Start Date: </span>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="startDate"/>
                </section>

                <section className="col-6">
                    <span> End Date: </span>
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="endDate"/>
                </section>
            </div>

            <div className="row">
                {/* <h3> Dates Selected: {startDate} </h3> */}
            </div>
            
            <div className="row">
                <div className="resultsContainer">
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
            </div>
        </div>
    );
}

export default SearchResults;
