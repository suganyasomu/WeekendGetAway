import React from "react";

const IndexedDBContext = React.createContext({
    // Update with event ID generated when item is saved
    savedActivity: [],
    onClick: () => undefined //function to use at lowest level
});

export default IndexedDBContext;