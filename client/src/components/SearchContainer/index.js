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
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "Arizona", label: "Arizona" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "California", label: "California" },
  { value: "Colorado", label: "Colorado" },
  { value: "Connecticut", label: "Connecticut" },
  { value: "Delaware", label: "Delaware" },
  { value: "Florida", label: "Florida" },
  { value: "Georgia", label: "Georgia" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Idaho", label: "Idaho" },
  { value: "Illinois", label: "Illinois" },
  { value: "Indiana", label: "Indiana" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Maine", label: "Maine" },
  { value: "Maryland", label: "Maryland" },
  { value: "Massachusetts", label: "Massachusetts" },
  { value: "Michigan", label: "Michigan" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "Nevada", label: "Nevada" },
  { value: "New Hampshire", label: "New Hampshire" },
  { value: "New Jersey", label: "New Jersey" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "New York", label: "New York" },
  { value: "North Carolina", label: "North Carolina" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Ohio", label: "Ohio" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "Oregon", label: "Oregon" },
  { value: "Pennsylvania", label: "Pennsylvania" },
  { value: "Rhode Island", label: "Rhode Island" },
  { value: "South Carolina", label: "South Carolina" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Texas", label: "Texas" },
  { value: "Utah", label: "Utah" },
  { value: "Vermont", label: "Vermont" },
  { value: "Virginia", label: "Virginia" },
  { value: "Washington", label: "Washington" },
  { value: "West Virginia", label: "West Virginia" },
  { value: "Wisconsin", label: "Wisconsin" },
  { value: "Wyoming", label: "Wyoming" },
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

          <InputGroup className="searchField">
            <FormControl
              type="text"
              className="searchBar form-control"
              name="search"
              value={props.results}
              onChange={props.handleInputChange}
              placeholder="Location"
              aria-label="search by location"
            />
            <InputGroup.Append>
              <Select
                defaultInputValue="Select a State"
                onChange={props.handleSelectedState}
                className="all-states basic-single"
                classNamePrefix="select"
                name="States"
                options={States}
              />
            </InputGroup.Append>
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

        <Row>
          <div className="col-sm-2 col-12"></div>
          <Checkbox
            name="campsites"
            checked={props.filter.campsites}
            handleCheckbox={(e) => {
              props.handleCheckboxChange(e);
            }}
            // disabled={ ? true : false}
          />

          <Checkbox
            name="hiking"
            checked={props.filter.hiking}
            handleCheckbox={(e) => {
              props.handleCheckboxChange(e);
            }}
          />

          <Checkbox
            name="biking"
            checked={props.filter.biking}
            handleCheckbox={(e) => {
              props.handleCheckboxChange(e);
            }}
          />

          <Checkbox
            name="climbing"
            checked={props.filter.climbing}
            handleCheckbox={(e) => {
              props.handleCheckboxChange(e);
            }}
          />

          <Checkbox
            name="hotsprings"
            checked={props.filter.hotsprings}
            handleCheckbox={(e) => {
              props.handleCheckboxChange(e);
            }}
          />

          <Checkbox
            name="weather"
            checked={props.filter.weather}
            handleCheckbox={(e) => {
              props.handleCheckboxChange(e);
            }}
          />
        </Row>
      </div>
    </header>
  );
}

export default SearchContainer;
