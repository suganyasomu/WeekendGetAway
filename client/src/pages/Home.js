import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";

import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";
import { AuthContext } from "../Auth.js";
import API from "../utils/API";
import SearchContext from "../utils/SearchContext";
import SubmitBtnContext from "../utils/SubmitBtnContext";
import IndexedDBContext from "../utils/IndexedDBContext";
import SignoutBtn from "../components/SignoutBtn";
// import Row from "../components/Row";

function Home() {
  // initialize state variables
  let results = {};
  const [searchState, setSearchState] = useState({
    search: "",
  });
  const [submitState, setSubmitState] = useState({
    submitted: false,
  });
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campsites, setCampsites] = useState([]);
  const [hotspring, setHotsprings] = useState([]);
  const [weather, setWeather] = useState([]);
  const [hiking, setHiking] = useState([]);
  const [biking, setBiking] = useState([]);
  const [climbing, setClimbing] = useState([]);
  const [cityCoords, setCityCoords] = useState({});

  const [filter, setFilter] = useState({
    hotsprings: false,
    campsites: true,
    weather: false,
    hiking: false,
    biking: false,
    climbing: false,
  });

  const resultsRef = useRef();

  // Update context to re-render when IndexedDB is updated:
  const [pageState, setPageState] = useState({
    savedActivity: [],
    onClick: (savedActivity) => {
      // Remember, the setter method on state does not merge like this.setState does
      // We use the spread operator so that we don't lose our onClick method whenever the state is updated.
      setPageState({ ...pageState, savedActivity });
    },
  });

  function handleCheckbox(event) {
    const { name, checked } = event.target;
    setFilter({
      ...filter,
      [name]: checked,
    });
  }

  function getFilter() {
    searchLocation(searchState.search);

    if (filter.campsites === true) {
      searchCampsites(searchState.search);
    }
    if (filter.hotsprings === true) {
      searchHotsprings(searchState.search);
    }
    if (filter.weather === true) {
      searchWeather(searchState.search);
    }
    if (filter.hiking === true) {
      searchHiking(searchState.search);
    }
    if (filter.biking === true) {
      searchBiking(searchState.search);
    }
    if (filter.climbing === true) {
      searchClimbing(searchState.search);
    }
  }

  // Get location City and State
  function searchLocation(query) {
    // console.log(query);
    API.getLocation(query)
      .then((res) => {
        let cityState = res.data.location.city + ", " + res.data.location.state;
        let cityCoords = res.data.latLng;

        setSearchState({
          ...searchState,
          search: cityState,
        });

        setCityCoords(cityCoords);
      })
      .catch((err) => console.log(err));
  }

  //getHotsprings
  function searchHotsprings(query) {
    API.getHotspring(query)
      .then(function (res) {
        setHotsprings(res.data);
      })
      .catch((err) => console.log(err));
  }

  //getWeather
  function searchWeather(query) {
    API.getWeather(query)
      .then(function (res) {
        setWeather(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Search for hiking trails
  function searchHiking(query) {
    API.getHike(query)
      .then((res) => {
        setHiking(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Search for biking trails
  function searchBiking(query) {
    API.getBike(query)
      .then((res) => {
        setBiking(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Search for climbing routes
  function searchClimbing(query) {
    API.getClimb(query)
      .then((res) => {
        setClimbing(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Check if user is logged in or not:
  const { currentUser } = useContext(AuthContext);

  // Search API's base on  user input (campsite)
  function searchCampsites(query) {
    API.getCampsites(query)
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

    // let other components know if a city has been searched for
    setSubmitState({
      ...submitState,
      submitted: true,
    });

    // send the searched term to the function
    if (searchState.search === "") {
      alert("Please enter a city");
    } else {
      getFilter(searchState.search);
    }
    setCity("");

    // Scroll down to results:
    resultsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleStartDate = (event) => {
    setStartDate(event);
  };

  const handleEndDate = (event) => {
    setEndDate(event);
  };

  const handleSelectedState = (event) => {
    setSearchState({
      ...searchState,
      search: searchState.search + "," + event.value,
    });
  };

  // Set results object
  results.campsites = campsites;
  results.hiking = hiking;
  results.hotsprings = hotspring;
  results.biking = biking;
  results.climbing = climbing;

  return (
    <div
      style={{
        margin: "0",
        backgroundImage: "linear-gradient(#E8E8E4, white)",
        width: "100%",
        height: "100%",
      }}
    >
      <SearchContext.Provider value={searchState}>
        <SubmitBtnContext.Provider value={submitState}>
          <IndexedDBContext.Provider value={pageState}>
            <SearchContainer
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
              results={city}
              handleSelectedState={handleSelectedState}
              filter={filter}
              handleCheckboxChange={handleCheckbox}
              handleStartDate={handleStartDate}
              handleEndDate={handleEndDate}
            />

            <div className="container">
              <div className="row">
                <span className="col-8"> </span>

                {currentUser ? (
                  <span className="col-4">
                    <p className="pt-2 float-right">
                      {" "}
                      You are logged in! <SignoutBtn />{" "}
                    </p>
                  </span>
                ) : (
                  <span className="col-4">
                    <p> Guest - Login to Save to your Itinerary </p>
                  </span>
                )}
              </div>

              <div className="row">
                <div className="col-12">
                  {startDate != "" ? (
                    <h3 className="text-center mt-2">
                      Dates Selected:{" "}
                      <h6>
                        {" "}
                        {startDate} - {endDate}{" "}
                      </h6>
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div ref={resultsRef} className="row">
                <section className="col-12">
                  <SearchResults
                    results={results}
                    filter={filter}
                    userStatus={currentUser}
                    weatherCondition={weather}
                    location={cityCoords}
                    startDate={startDate}
                    endDate={endDate}
                    activities={[hiking]}
                  />
                </section>
              </div>
            </div>
          </IndexedDBContext.Provider>
        </SubmitBtnContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default Home;
