import React, { useState, useEffect } from "react";
import "./style.css";
import { useIndexedDB } from "react-indexed-db";
import SavedBtn from "../SavedBtn";
import DeleteBtn from "../DeleteBtn";

function IndexedDBModal({key}) {
    const { getAll, clear } = useIndexedDB("activity");
    const [selectedItems, setSelectedItems ] = useState([]);

    useEffect(() => {
        getAll().then((activitesFromDB) => {
            setSelectedItems(activitesFromDB);
        });
    }, []);
    // console.log(selectedItems);

    const handleSave = (e) => {
        // Clear when previous items are saved to itinerary
        setSelectedItems([]);
    }


    return (
        <section id="indexedDBList" {...key} >
            <h5> Saved Items  </h5> 
            <div id="savedItems">
                <ul className="indexListItems">
                    {selectedItems.map((res, index) => {
                        let id = index + 1;
                        return (
                            <li key={id}>
                                {/* <DeleteBtn  
                                    onClick={() => 
                                        clear().then()
                                    } /> */}
                                <strong> {res.activity.charAt(0).toUpperCase() + res.activity.slice(1)}: </strong>
                                {res.name}
                            </li>
                        );
                    })}
                </ul>
                <SavedBtn  handleSave={handleSave} />

            </div>
        </section>
    );
}

export default IndexedDBModal;
