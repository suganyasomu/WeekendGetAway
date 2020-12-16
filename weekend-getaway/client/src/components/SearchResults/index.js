import React, { useState } from"react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from "../../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Map from "../Map"
import Aside from "../Aside"
import Col from "../Col"
import Row from "../Row"

function SearchResults(props) {
    // console.log(props);

    const [save, setState] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dates, setDates] = useState({
        start: "",
        end: ""
    });
    


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
            campsite: campsite
        })
        .then(res => console.log("Save campsite to database!") )
        .catch(err => console.log(err));

    };

    function handleStartDate(start) {
        setStartDate(start);
        let month = start.getMonth() + 1; //months from 1-12
        let day = start.getDate();
        let year = start.getFullYear(start);
        let newStart =  month + "/" + day + "/" + year;
        setDates({start: newStart});
        // console.log(dates.start);
    }

    function handleEndDate(end) {
        setEndDate(end);
        let month = end.getMonth() + 1; //months from 1-12
        let day = end.getDate();
        let year = end.getFullYear(end);
        let newEnd =  month + "/" + day + "/" + year;
        setDates({end: newEnd});
        // console.log(dates.end);
    }

    return (
        <div className="container">
            <div className="row">
                <section className="col-6">
                    <span> Start Date: </span>
                    <DatePicker selected={startDate} onChange={date => handleStartDate(date) } className="startDate"/>
                </section>

                <section className="col-6">
                    <span> End Date: </span>
                    <DatePicker selected={endDate} onChange={date => handleEndDate(date) } className="endDate"/>
                </section>
            </div>

            <div className="row">
                <h3> Dates Selected: {dates.start} - {dates.end} </h3>
            </div>
            
            <div className="row">
                <div className="resultsContainer">

                    <h3>Campites for: {props.searched}</h3>
                    <Row>
                    <Col size="md-6">
                                
                                <Aside>
                                    {props.results.length>0 ?<Map results={props.results} />:<div/>}
                                
                                </Aside>
                                </Col>
                                </Row>
                    
                    {props.results.map((res, index) => {
                        let id = index+1;
                        return (
                            <div>
                                <Row>
                                <Col size="md-6">
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
                            </Col>
                        
                           
                            </Row>
                            </div>
                        )
                    })} 
                </div>
            </div>
        </div>
    );
}

export default SearchResults;
