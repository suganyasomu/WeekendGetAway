import React, { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
// import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AlertModal from "../AlertModal";

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
      <div className="row text-white">
        <section className="col-6 justify-content-center">
          <span> Start Date: </span>
          <DatePicker
            selected={startDate}
            onChange={ (date) => {
              if( date >= new Date() ) {
                handleStartDate(date);
                {props.handleStartDate( handleStartDate(date) )}
              }
              else {
                alert("Please pick a date greater than day's date");
                // return <AlertModal modalState="true" />
              }

            }}
            className="startDate"
          />
        </section>

        <section className="col-6 justify-content-center">
          <span> End Date: </span>

          <DatePicker
            selected={endDate}
            onChange={ (date) => {
              if( date >= new Date() ) {
                handleEndDate(date);
                {props.handleEndDate( handleEndDate(date) )}
              }
              else {
                alert("Please pick a date greater than day's date");
                // return <AlertModal modalState="true" />
              }

            }}
            className="startDate"
          />
        </section>
        {/* <div className="row">
          <div className="col-12">
          {dates.start != "" ? (
            <h3 className="text-center mt-2">
              Dates Selected: {dates.start} - {dates.end}
            </h3>
          ) : (
            ""
          )}
          </div>
        </div> */}
      </div>
  );
};

export default Dates;
