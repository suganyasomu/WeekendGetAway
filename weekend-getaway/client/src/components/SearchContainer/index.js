import React from"react";

function SearchContainer() {
    return (
        <form className="input-group mb-3">
            <input type="text" className="form-control" placeholder="campsite" aria-label="search for campsite" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Submit</button>
            </div>
        </form>
    );
}

export default SearchContainer;