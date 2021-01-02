import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import SavedBtn from "../SavedBtn";
import Modal from 'react-bootstrap/Modal';
import IndexedDBContext from "../../utils/IndexedDBContext";

function IndexedDBModal() {
    const { indexeddb } = useContext(IndexedDBContext);

    console.log("indexedDB context: ");
    console.log(indexeddb );

    // useEffect(() => {
    //     getAll().then((activitesFromDB) => {
    //         setSelectedItems(activitesFromDB);
    //     });
    // }, []);


    return (
        
        <Modal.Dialog id="modal-dialog">
            <Modal.Header >
                <Modal.Title> Selected Items: </Modal.Title>
            </Modal.Header>
                {indexeddb.map((res, index) => {
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
                <SavedBtn />
            </Modal.Footer>
        </Modal.Dialog>
    );
}

export default IndexedDBModal;
