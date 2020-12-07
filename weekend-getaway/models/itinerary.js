const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//work in progress
const ItinerarySchema = new Schema({
    user: {type: String, required: true},
    campsite: {type: String, required: true},
    begin_date: {type: Date, required: true},
    end_date: {type: Date, required: true},
    activities: [
        {
            activity: {type: String, required: true},
            date_planned: {type: Date, required: true}
        }
    ]

});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;
