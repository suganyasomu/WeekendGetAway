import React, { useState, useEffect } from "react";
import "./style.css";
import { useIndexedDB } from "react-indexed-db";
import API from "../../utils/API";

function Save() {
  const { getAll, clear } = useIndexedDB("activity");
  // const [activities, setActivity] = useState();

  // useEffect(() => {
  //   getAll().then((activitesFromDB) => {
  //     setActivity(activitesFromDB);
  //   });
  // }, []);

  async function handleSaveBtn() {
    let activities = await getAll();

    if (activities == "") {
      return alert("Please Save A Campsite");
    }

    API.saveToItinerary(activities)
      // .then((res) => {
      //   console.log(res);
      // })
      .then((res) => {
        alert("Campsite has now been saved to your itinerary!");
      })
      .then(clear())
      .catch((err) => console.log(err));

    //   clear().then(() => {
    //     console.log("Saved list has been cleared");
    //   });
  }

  return (
    <span className="btn btn-outline-secondary" role="button" tabIndex="0" onClick={handleSaveBtn}>
      Save Me
    </span>
  );
}

export default Save;
