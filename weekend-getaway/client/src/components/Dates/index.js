import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
// import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Dates(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [dates, setDates] = useState({
    start: "",
    end: "",
  });

  function handleStartDate(start) {
    setStartDate(start);
    let month = start.getMonth() + 1; //months from 1-12
    let day = start.getDate();
    let year = start.getFullYear(start);
    let newStart = month + "/" + day + "/" + year;
    setDates({ start: newStart });
    return newStart;
  }

  function handleEndDate(end) {
    setEndDate(end);
    let month = end.getMonth() + 1; //months from 1-12
    let day = end.getDate();
    let year = end.getFullYear(end);
    let newEnd = month + "/" + day + "/" + year;
    setDates({ start: dates.start, end: newEnd });
    return newEnd;
  }
  

  return (
      <div className="row">
        <section className="col-6">
          <span> Start Date: </span>
          <DatePicker
            // required
            selected={startDate}
            onChange={ (date) => {
              handleStartDate(date);
              {props.handleStartDate( handleStartDate(date) )}
            }}
            className="startDate"
          />
        </section>

        <section className="col-6">
          <span> End Date: </span>

          <DatePicker
            selected={endDate}
            onChange={ (date) => {
              handleEndDate(date);
              {props.handleEndDate( handleEndDate(date) )}
            }}
            className="startDate"
          />
        </section>
        <div className="row">
          {dates.start != "" ? (
            <h3>
              Dates Selected: {dates.start} - {dates.end}
            </h3>
          ) : (
            ""
          )}
        </div>
      </div>
  );
};

export default Dates;
