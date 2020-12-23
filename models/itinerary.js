const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//work in progress
const ItinerarySchema = new Schema({
  user: { type: String, required: true },
  campsite: { type: String, required: true },
  campDescription: {type: String, required: false},
  campRes: { type: String, required: false },
  campFee: { type: String, required: false },
  campPhone: { type: String, required: false },
  campCity: { type: String, required: false},
  campLat: { type: Number, required: true },
  campLon: { type: Number, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  activities: [
    {
      activity: { type: String, required: false },
      name: { type: String, required: false },
      date_planned: { type: Date, required: false },
    },
  ],
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;