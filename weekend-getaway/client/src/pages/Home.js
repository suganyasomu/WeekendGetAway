import React, {useState, useEffect, useCallback,useContext}from"react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import { withRouter, Redirect } from "react-router";
import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";
import app from "../base";
import firebase from 'firebase';
import  {AuthContext} from "../Auth.js";
import API from "../utils/API";

function Home(){
    // initialize state variables
    const [ search, setSearch ] = useState("");

    // Mount initial info
    useEffect( () => {

    });

    // Search API's base on  user input (campsite)
    function searchCampsites(query) {
        console.log(query);

        API.getCampsites(query)
            .then(res =>
                console.log(res)
            )
            .catch(err => console.log(err));
    }

    const handleInputChange = event => {
        event.preventDefault();
        setSearch(event.target.value);
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
        setSearch(event.target.value);
        // console.log(search);

        // send the searched term to the function
        searchCampsites(search);

        // clear the input form
        // setSearch("");
    };



    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <span className="col-10"> </span>
                    <div className="col-2">
                        <button className="btn btn-outline-secondary" onClick={() => app.auth().signOut()}>Sign out</button>
                    </div>
                </div>

                <div className="row">
                    <section className="col-12">
                        <h3>Search: </h3>
                        <SearchContainer 
                            handleFormSubmit={handleFormSubmit}
                            handleInputChange={handleInputChange}
                            results={search}
                        />
                        <hr />
                    </section>
                </div>

                <div className="row">
                    <section className="col-6">
                        <SearchResults 
                            search={search}
                        />
                    </section>
                    <section className="col-6">
                        <Map />
                    </section>
                </div>
            </div>

        </div>
    );
}

export default Home;