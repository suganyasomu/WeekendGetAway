import React, { useState } from"react";

function SearchResults(props) {
    // console.log(props);

    return (
        <div>
            <h3>Results for: {props.searched}</h3>

            <p> Campsites {props.campsites} </p>
        </div>
    );
}

export default SearchResults;