import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useIndexedDB } from "react-indexed-db";
import SavedBtn from "../SavedBtn";
import DeleteBtn from "../DeleteBtn";
import IndexedDBContext from "../../utils/IndexedDBContext";

function IndexedDBModal({key}) {
    const { getAll, deleteRecord } = useIndexedDB("activity");
    const [selectedItems, setSelectedItems ] = useState([]);
    const { savedActivity } = useContext(IndexedDBContext);
    const updateIBD = useContext(IndexedDBContext);

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
        
    }


    return (
        <section id="indexedDBList" {...key} >
            <h5> Saved Items  </h5> 
            <div id="savedItems">
                <ul className="indexListItems overflow-auto">
                    {selectedItems.map((res, index) => {
                        let id = res.id;
                        console.log(res); // get key id

                        return (
                            <li key={id}>
                                
                                <DeleteBtn  
                                    onClick={() => {
                                        deleteRecord(id).then(
                                            (event) => {
                                                console.log("Unsaved from IndexedDB");
                                                // re-render component:
                                                updateIBD.onClick([]);
                                            },
                                            (error) => {
                                                console.log(error);
                                            }
                                        );
                                    }
                                } />
                                <strong> {res.activity.charAt(0).toUpperCase() + res.activity.slice(1)}: </strong>
                                {res.name}


                            </li>
                        );
                    })}
                </ul>

                { selectedItems.length===0  &&
                    <div style={{ paddingBottom: '20px' }} > 
                        <span style={{ fontStyle: 'italic', fontSize: 'smaller' }}> No Campsites or Activities have been saved yet  </span>
                    </div>
                }
                <SavedBtn  handleSave={handleSave} handleClear={handleClear} />
                

            </div>
        </section>
    );
}

export default IndexedDBModal;
