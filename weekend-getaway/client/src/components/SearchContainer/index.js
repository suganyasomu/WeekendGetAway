import React from "react";
import "./style.css";
import {InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useSpring, animated} from 'react-spring';

function SearchContainer(props) {
  const animation = useSpring({
    opacity: 1, from: {opacity: 0},
    config: { duration: 1500 }
  });

  return (
    <header className="header" >
      <animated.section style={animation} >
        <h1 id="homeHeader"> Your next adventure is just a few clicks away </h1>
      </animated.section>

      <InputGroup className="searchField" >
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
          <Button id="searchIcon">
            <FontAwesomeIcon icon="search" size="lg" 
              type="submit"
              onClick={props.handleFormSubmit}
            />
          </Button>
        </InputGroup.Append>

      </InputGroup>
      

    </header>
  );
}

export default SearchContainer;
