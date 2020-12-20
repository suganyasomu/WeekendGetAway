const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//work in progress
const ItinerarySchema = new Schema({
  user: { type: String, required: true },
  campsite: { type: String, required: true },
  campRes: { type: String },
  campFee: { type: String },
  campPhone: { type: String, required: false },
  campLat: { type: Number, required: true },
  campLon: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  activities: [
    {
      activity: { type: String, required: false },
      date_planned: { type: Date, required: false },
    },
  ],
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;
