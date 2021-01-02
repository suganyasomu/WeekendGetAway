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
import SubmitBtnContext from "../utils/SubmitBtnContext";
import { useIndexedDB } from "react-indexed-db";
import IndexedDBContext from "../utils/IndexedDBContext";
import SavedItems from "../components/IndexedDBModal";
// import SavedBtn from "../components/SavedBtn";
import Dates from "../components/Dates";
import SignoutBtn from "../components/SignoutBtn";
import Row from "../components/Row";

function Home() {
  // initialize state variables
  let results = {};
  const [searchState, setSearchState] = useState({
    search: "",
  });
  const [submitState, setSubmitState] = useState({
    submitted: false,
  });
  const { getAll } = useIndexedDB("activity");
  const [indexedDBState, setindexedDBState] = useState({
    indexeddb: [getAll()]
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
    campsites: false,
    weather: false,
    hiking: false,
    biking: false,
    climbing: false,
  });

  const resultsRef = useRef();

  function handleCheckbox(event) {
    const { name, checked } = event.target;
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
      console.log("campsites is called");
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
    if (filter.biking === true) {
      searchBiking(searchState.search);
      console.log("Biking is called");
    }
    if (filter.climbing === true) {
      searchClimbing(searchState.search);
      console.log("Climbing is called");
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
          search: cityState,
        });

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
        console.log("from hike page");
        console.log(res.data);
        setHiking(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Search for biking trails
  function searchBiking(query) {
    console.log(query);

    API.getBike(query)
      .then((res) => {
        console.log(res.data);
        setBiking(res.data);
      })
      .catch((err) => console.log(err));
  }

  // Search for climbing routes
  function searchClimbing(query) {
    console.log(query);

    API.getClimb(query)
      .then((res) => {
        console.log(res.data);
        setBiking(res.data);
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
    <SearchContext.Provider value={searchState}>
      <SubmitBtnContext.Provider value={submitState}>
      <IndexedDBContext.Provider value={indexedDBState}>
        <div>
          <SearchContainer
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={city}
            handleSelectedState={handleSelectedState}
            filter={filter}
            handleCheckboxChange={handleCheckbox}
          />

          <section className="loginStatus" style={{ float: "right", marginTop: '10px', marginRight: '50px' }}>
              {currentUser ? (
                <div>
                  <p> You're logged in! <SignoutBtn /> </p>
                  
                </div>
              ) : (
                <span >
                  <p> Guest - Login to Save to your Itinerary </p>
                </span>
              )}

          </section>


          <div className="container" style={{ marginTop: '40px' }} >
            <Row>
              <div className="col-md-3" />
              <section className="col-md-6 col-12"
                style={{
                  borderRadius: "33px",
                  boxShadow: " 0 4px 8px grey"
                }}
              >
                <div style={{
                    margin: '12px'
                  }}
                >
                  <Dates
                    handleStartDate={handleStartDate}
                    handleEndDate={handleEndDate}
                  />
                </div>
              </section>
              <div className="col-md-3" />
            </Row>


            {/* Modal to Save all selected items to Itinerary */}
            {/* <SavedItems /> */}

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
        </div>
        </IndexedDBContext.Provider>
      </SubmitBtnContext.Provider>
    </SearchContext.Provider>
  );
}

export default Home;
