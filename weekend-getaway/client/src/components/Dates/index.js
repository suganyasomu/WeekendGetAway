import React, {useState } from"react";
// import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dates = ({ dateOne }) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleChange(date) {
        // setStartDate(date);
        console.log(startDate);
        console.log(endDate);

        // Parse the date: 'Sat Dec 12 2020 12:51:29 GMT-0800 (Pacific Standard Time)'

        // dateOne( ); // pass start date to parent component

    }

    return (
        <div className="row">
            <section className="col-6">
                <span> Start Date: </span>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="startDate"/>
            </section>

            <section className="col-6">
                <span> End Date: </span>
                <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="endDate"/>
            </section>
        </div>
    );
}

export default Dates;