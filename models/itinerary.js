const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  user: { type: String, required: true },
  campsite: { type: String, required: true },
  campDescription: { type: String, required: false },
  campRes: { type: String, required: false },
  campFee: { type: String, required: false },
  campPhone: { type: String, required: false },
  campCity: { type: String, required: false },
  campLat: { type: Number, required: true },
  campLon: { type: Number, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  activities: [
    {
      activity: { type: String, required: false },
      name: { type: String, required: false },
      lat: { type: Number, required: false },
      lng: { type: Number, required: false },
      length: { type: Number, required: false },
      difficulty: { type: String, required: false },
      summary: { type: String, required: false },
      rating: { type: String, required: false },
      type: { type: String, required: false },
      temperature: { type: String, required: false },
      elevationChange: { type: Number, required: false }
    },
  ],
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;
