import React, { useState } from"react";

function SearchResults(props) {
    console.log(props);

    return (
        <div>
            <h3>Results for: {props.searched}</h3>

            <div> Campsites 
                {props.results.map((res, index) => {
                    let id = index+1;
                    return (
                        <ul key={id}>
                            <li> {res.FacilityName} </li>
                        </ul>
                    )
                })} 
                
            </div>
        </div>
    );
}

export default SearchResults;