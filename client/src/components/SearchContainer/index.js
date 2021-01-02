import React, { useState } from "react";
import "./style.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import Select from "react-select";
import Checkbox from "../Checkbox";
import Background from "../../Assets/searchHeader.jpg";
import Row from "../Row";

const States = [
  { value: "Alabama", label: "AL" },
  { value: "Alaska", label: "AK" },
  { value: "Arizona", label: "AZ" },
  { value: "Arkansas", label: "AR" },
  { value: "California", label: "CA" },
  { value: "Colorado", label: "CO" },
  { value: "Connecticut", label: "CT" },
  { value: "Delaware", label: "DE" },
  { value: "Florida", label: "FL" },
  { value: "Georgia", label: "GA" },
  { value: "Hawaii", label: "HI" },
  { value: "Idaho", label: "ID" },
  { value: "Illinois", label: "IL" },
  { value: "Indiana", label: "IN" },
  { value: "Iowa", label: "IA" },
  { value: "Kansas", label: "KS" },
  { value: "Kentucky", label: "KY" },
  { value: "Louisiana", label: "LA" },
  { value: "Maine", label: "ME" },
  { value: "Maryland", label: "MD" },
  { value: "Massachusetts", label: "MA" },
  { value: "Michigan", label: "MI" },
  { value: "Minnesota", label: "MN" },
  { value: "Mississippi", label: "MS" },
  { value: "Missouri", label: "MO" },
  { value: "Montana", label: "MT" },
  { value: "Nebraska", label: "NE" },
  { value: "Nevada", label: "NV" },
  { value: "New Hampshire", label: "NH" },
  { value: "New Jersey", label: "NJ" },
  { value: "New Mexico", label: "NM" },
  { value: "New York", label: "NY" },
  { value: "North Carolina", label: "NC" },
  { value: "North Dakota", label: "ND" },
  { value: "Ohio", label: "OH" },
  { value: "Oklahoma", label: "OK" },
  { value: "Oregon", label: "OR" },
  { value: "Pennsylvania", label: "PA" },
  { value: "Rhode Island", label: "RI" },
  { value: "South Carolina", label: "SC" },
  { value: "South Dakota", label: "SD" },
  { value: "Tennessee", label: "TN" },
  { value: "Texas", label: "TX" },
  { value: "Utah", label: "UT" },
  { value: "Vermont", label: "VT" },
  { value: "Virginia", label: "VA" },
  { value: "Washington", label: "WA" },
  { value: "West Virginia", label: "WV" },
  { value: "Wisconsin", label: "WI" },
  { value: "Wyoming", label: "WY" },
];

function SearchContainer(props) {
  // console.log(props);

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container">
        <Row>
          <animated.section style={animation} className="col-12">
            <h1 id="homeHeader">
              {" "}
              Your next adventure is just a few clicks away...{" "}
            </h1>
          </animated.section>
        </Row>

        <Row>
          <div className="col-12">
            <Row>
              <InputGroup className="searchField"
                style={{
                  borderRadius: "33px",
                  boxShadow: " 0 4px 8px black"
                }}
              >
                {/* Input Field */}
                <FormControl
                  type="text"
                  className="searchBar form-control"
                  name="search"
                  value={props.results}
                  onChange={props.handleInputChange}
                  placeholder="Location"
                  aria-label="search by location"
                />

                {/* Dropdown for states */}
                <InputGroup.Append>
                  <Select
                    defaultInputValue="State"
                    onChange={props.handleSelectedState}
                    className="all-states basic-single"
                    classNamePrefix="select"
                    name="States"
                    options={States}
                  />
                </InputGroup.Append>

                {/* Search Button */}
                <InputGroup.Append>
                  <Button id="searchIcon">
                    <FontAwesomeIcon
                      icon="search"
                      size="lg"
                      type="submit"
                      onClick={props.handleFormSubmit}
                    />
                  </Button>
                </InputGroup.Append>

              </InputGroup>
            </Row>
          </div>
        </Row>

        <Row>
          <div className="col-2"> </div>
          <section className="col-8" style={{ paddingTop: "10px"}}>
            <Row>
              <div className="col-lg-2 col-6">
                <Checkbox
                  name="campsites"
                  checked={props.filter.campsites}
                  handleCheckbox={(e) => {
                    props.handleCheckboxChange(e);
                  }}
                  // disabled={ ? true : false}
                />
              </div>

              <div className="col-lg-2 col-6">
                <Checkbox
                  name="hiking"
                  checked={props.filter.hiking}
                  handleCheckbox={(e) => {
                    props.handleCheckboxChange(e);
                  }}
                />
              </div>

              <div className="col-lg-2 col-6">
                <Checkbox
                  name="biking"
                  checked={props.filter.biking}
                  handleCheckbox={(e) => {
                    props.handleCheckboxChange(e);
                  }}
                />
              </div>

              <div className="col-lg-2 col-6">
                <Checkbox
                  name="climbing"
                  checked={props.filter.climbing}
                  handleCheckbox={(e) => {
                    props.handleCheckboxChange(e);
                  }}
                />
              </div>

              <div className="col-lg-2 col-6">
                <Checkbox
                  name="hotsprings"
                  checked={props.filter.hotsprings}
                  handleCheckbox={(e) => {
                    props.handleCheckboxChange(e);
                  }}
                />
              </div>

              <div className="col-lg-2 col-6">
                <Checkbox
                  name="weather"
                  checked={props.filter.weather}
                  handleCheckbox={(e) => {
                    props.handleCheckboxChange(e);
                  }}
                />
              </div>
            </Row>
          </section>
          <div className="col-2"> </div>
        </Row>
      </div>
    </header>
  );
}

export default SearchContainer;
