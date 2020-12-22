import React from "react";

function SearchContainer(props) {
  return (
    <form className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        name="search"
        value={props.results}
        onChange={props.handleInputChange}
        placeholder="Location"
        aria-label="search by location"
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="submit"
          onClick={props.handleFormSubmit}
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </form>
  );
}

export default SearchContainer;
