import React, { useState, useEffect } from "react";
import "./style.css";
import { useIndexedDB } from "react-indexed-db";
import API from "../../utils/API";

function SavedBtn() {
  const { getAll, clear } = useIndexedDB("activity");

  // Save all selected activites to DB
  async function handleSaveBtn() {
    let activities = await getAll();

    if (activities === "") {
      return alert("Please Save A Campsite");
    }

    API.saveToItinerary(activities)
      .then((res) => {
        alert("Campsite has now been saved to your itinerary!");
      })
      .then(clear())
      .catch((err) => console.log(err));
  }

  // Clear all saved items (prior to saving to DB)
  function handleClearBtn() {
    // let activities = await getAll();

    clear().then(() => {
      console.log("IndexedDB has been cleared");
    });
    
  }

  return (
    <div>
      <span
        className="saveButton btn btn-outline-secondary"
        role="button"
        tabIndex="0"
        onClick={handleSaveBtn}
      >
        Create Itinerary
      </span>

      <span
        className="clearButton btn btn-outline-secondary"
        role="button"
        tabIndex="0"
        onClick={handleClearBtn}
        >
        Clear All
      </span>
    </div>
  );
}

export default SavedBtn;
