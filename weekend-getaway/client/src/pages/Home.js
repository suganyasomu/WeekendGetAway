import React, {useCallback,useContext}from"react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import { withRouter, Redirect } from "react-router";
import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";
import app from "../base";
import firebase from 'firebase';
import  {AuthContext} from "../Auth.js";



   function Home(){

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <section className="col-12">
                        <h3>Search: </h3>
                        <SearchContainer />
                        <hr />
                    </section>
                </div>

                <div className="row">
                    <section className="col-6">
                        <SearchResults />
                    </section>
                    <section className="col-6">
                        <Map />
                    </section>
                </div>
            </div>
            <div>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
        </div>
    );
}

export default Home;