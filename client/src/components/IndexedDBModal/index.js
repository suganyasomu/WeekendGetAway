import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useIndexedDB } from "react-indexed-db";
import SavedBtn from "../SavedBtn";
import DeleteBtn from "../DeleteBtn";
import IndexedDBContext from "../../utils/IndexedDBContext";

function IndexedDBModal({key}) {
    const { getAll, clear } = useIndexedDB("activity");
    const [selectedItems, setSelectedItems ] = useState([]);
    const { savedActivity } = useContext(IndexedDBContext);

    useEffect(() => {
        getAll().then((activitesFromDB) => {
            setSelectedItems(activitesFromDB);
        });
    }, [savedActivity]);
    // console.log(selectedItems);

    const handleSave = (e) => {
        // Clear when previous items are saved to itinerary
        setSelectedItems([]);
    }

    const handleClear = (e) => {
        // Clear IndexedDB items that are being displayed
        setSelectedItems([]);
        
        // need to re-render this component...
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
                <SavedBtn  handleSave={handleSave} handleClear={handleClear} />

            </div>
        </section>
    );
}

export default IndexedDBModal;
