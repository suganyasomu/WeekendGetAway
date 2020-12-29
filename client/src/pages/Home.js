import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";
// import { withRouter, Redirect } from "react-router";
import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";
// import firebase from "firebase";
import { AuthContext } from "../Auth.js";
import API from "../utils/API";
import SearchContext from "../utils/SearchContext";
import Save from "../components/SavedBtn";
import Dates from "../components/Dates";
import SignoutBtn from "../components/SignoutBtn";
import Row from "../components/Row";

function Home() {
  // initialize state variables
  let results = {};
  const [searchState, setSearchState] = useState({
    search: "",
  });
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campsites, setCampsites] = useState([]);
  const [hotspring, setHotsprings] = useState([]);
  const [weather, setWeather] = useState([]);
  const [hiking, setHiking] = useState([]);
  const [cityCoords, setCityCoords] = useState({});

  const [filter, setFilter] = useState({
    hotsprings: false,
    campsites: true,
    weather: false,
    hiking: false,
  });

  const resultsRef = useRef();

  function handleCheckbox(event) {
    const { name, checked } = event.target;
    console.log(name);
    console.log(checked);
    setFilter({
      ...filter,
      [name]: checked,
    });
    console.log("from home page");
    console.log(filter);
  }

  function getFilter() {
    searchLocation(searchState.search);

    if (filter.campsites === true) {
      searchCampsites(searchState.search);
      console.log("campsites in called");
    }
    if (filter.hotsprings === true) {
      searchHotsprings(searchState.search);
      console.log("Hotspring is called");
    }
    if (filter.weather === true) {
      searchWeather(searchState.search);
      console.log("Weather is called");
    }
    if (filter.hiking === true) {
      searchHiking(searchState.search);
      console.log("Hiking is called");
    }
  }

  // Get location City and State
  function searchLocation(query) {
    console.log(query);
    API.getLocation(query)
      .then((res) => {
        let cityState = res.data.location.city + ", " + res.data.location.state;
        let cityCoords = res.data.latLng;
        setSearchState({
          ...searchState,
<<<<<<< HEAD:client/src/pages/Home.js
          cityState,
=======
          search: cityState,
>>>>>>> 7a8fd3fbce18cf46efd4e153b17eb9cbf75a110e:weekend-getaway/client/src/pages/Home.js
        });

<<<<<<< HEAD:client/src/pages/Home.js
=======
        setSearchState({
          ...searchState,
          search: cityState,
        });

>>>>>>> 4695b5eabc19389bdc5125c69f24f55cdcece6e9:weekend-getaway/client/src/pages/Home.js
        setCityCoords(cityCoords);
      })
      .catch((err) => console.log(err));
  }

  //getHotsprings
  function searchHotsprings(query) {
    // console.log(query);

    API.getHotspring(query)
      // .then((res) => console.log(res.data))
      .then(function (res) {
        console.log(res);
        setHotsprings(res.data);
      })
      .catch((err) => console.log(err));
  }

  //getWeather
  function searchWeather(query) {
    // console.log(query);

    API.getWeather(query)
      // .then((res) => console.log(res.data))
      .then(function (res) {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Search for hiking trails
  function searchHiking(query) {
    console.log(query);

    API.getHike(query)
      .then((res) => {
        console.log(res.data);
        setHiking(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);

  // Search API's base on  user input (campsite)
  function searchCampsites(query) {
    // console.log(query);

    API.getCampsites(query)
      // .then((res) => console.log(res.data))
      .then(function (res) {
        setCampsites(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // setSearchState(event.target.value);
    setSearchState({
      ...searchState,
      [name]: value,
    });
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // send the searched term to the function
    if (searchState.search === "") {
      alert("Please enter a city");
    } else {
      getFilter(searchState.search);
    }
    console.log(campsites);
    setCity("");

    // Scroll down to results:
    resultsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleStartDate = (event) => {
    // console.log(event);
    setStartDate(event);
  };

  const handleEndDate = (event) => {
    // console.log(event);
    setEndDate(event);
  };

  const handleSelectedState = (event) => {
<<<<<<< HEAD:client/src/pages/Home.js
<<<<<<< HEAD:client/src/pages/Home.js
    console.log(event.value);
    // let temp = searchState.search + ", " + event.value;
    // console.log(temp);

    // setSearchState({
    //   ...searchState,
    //   search: temp,
    // });
    // console.log(searchState);
    // setSearchState((search: temp));
=======
=======
>>>>>>> 4695b5eabc19389bdc5125c69f24f55cdcece6e9:weekend-getaway/client/src/pages/Home.js
    setSearchState({
      ...searchState,
      search: searchState.search + "," + event.value,
    });
<<<<<<< HEAD:client/src/pages/Home.js
>>>>>>> 7a8fd3fbce18cf46efd4e153b17eb9cbf75a110e:weekend-getaway/client/src/pages/Home.js
=======
>>>>>>> 4695b5eabc19389bdc5125c69f24f55cdcece6e9:weekend-getaway/client/src/pages/Home.js
  };

  // Set results object
  results.campsites = campsites;
  results.hiking = hiking;
  results.hotsprings = hotspring;

  return (
    <SearchContext.Provider value={searchState}>
      <div>
        <SearchContainer
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={city}
          handleSelectedState={handleSelectedState}
        />

        <div className="container">
          <Row>
            <div className="col-2" />
            <section className="col-8">
              <Dates
                handleStartDate={handleStartDate}
                handleEndDate={handleEndDate}
              />
            </section>
            <div className="col-2" />
          </Row>

          <div className="row">
            <span className="col-8"> </span>

            {currentUser ? (
              <span className="col-2" style={{ padding: "30px" }}>
                <p> You are logged in! </p>
              </span>
            ) : (
              <span className="col-4">
                <p> Guest - Login to Save to your Itinerary </p>
              </span>
            )}

            {currentUser && (
              <div className="col-2">
                <SignoutBtn />
              </div>
            )}
          </div>

          <Save />

          <div ref={resultsRef} className="row">
            <section className="col-12">
              <SearchResults
<<<<<<< HEAD:client/src/pages/Home.js
                results={campsites}
                userStatus={currentUser}
                filter={filter}
=======
                results={results}
                filter={filter}
                userStatus={currentUser}
>>>>>>> 4695b5eabc19389bdc5125c69f24f55cdcece6e9:weekend-getaway/client/src/pages/Home.js
                handleCheckboxChange={handleCheckbox}
                weatherCondition={weather}
                location={cityCoords}
                startDate={startDate}
                endDate={endDate}
              />
            </section>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default Home;
