import React from"react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import SearchContainer from "../components/SearchContainer";

function Home() {
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

        </div>
    );
}

export default Home;