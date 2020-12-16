import React, {useState, useEffect, useContext} from"react";
import API from "../utils/API";
import { AuthContext } from "../Auth.js";

function UserItinerary() {
    const [trips, setTrips] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const uid = currentUser.uid;
    // console.log(uid);

    useEffect(() => {
        loadItinerary(uid)
    }, [])

    // Load the user's saved trips from database
    function loadItinerary(id) {
        // console.log(id); // user's login ID

        API.getItinerary(id)
        // .then(res => console.log(res.data))
        .then(res => setTrips(res.data) )
        .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <div className="row">
                <h3> Saved Trips </h3>
            </div>

            <div className="row">
                {trips.map((res, index) => {
                    let id = index+1;

                    return (
                        <h1 key={id}>{res.campsite}</h1>
                    )
                })}
            </div>

        </div>

    );
}

export default UserItinerary;