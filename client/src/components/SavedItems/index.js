import React, { useState, useEffect } from "react";
import "./style.css";
import { useIndexedDB } from "react-indexed-db";
import SavedBtn from "../SavedBtn";
import Modal from 'react-bootstrap/Modal';
import Draggable, {DraggableCore} from 'react-draggable';

function SavedItems() {
    const { getAll, clear } = useIndexedDB("activity");
    const [selectedItems, setSelectedItems ] = useState([]);
    const [ dragState, setDragState] = useState({
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: -400, y: 200
        }
    });

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
        
        <Modal.Dialog id="modal-dialog">
            <Modal.Header >
                <Modal.Title> Selected Items: </Modal.Title>
            </Modal.Header>
                {selectedItems.map((res, index) => {
                    let id = index + 1;
                    return (
                        <div key={id}>
                            <Modal.Body>
                                <ul>
                                    <li>
                                        {res.activity}: {res.name}
                                    </li>
                                </ul>
                            </Modal.Body>
                        </div>
                    );
                })}
            
            <Modal.Footer>
                <SavedBtn
                    handleSave={handleSave}
                />
            </Modal.Footer>
        </Modal.Dialog>
    );
}

export default SavedItems;
