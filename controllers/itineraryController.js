const db = require("../models");

// Defining methods for the itineraryController
module.exports = {
  findAll: function (req, res) {
    db.Itinerary.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Itinerary.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const itinerary = req.body;

    let plan = {};
    let activities = [];

    itinerary.forEach((thisPlan) => {
      if (thisPlan.activity === "camping") {
        plan.campsite = thisPlan.name;
        plan.user = thisPlan.user;
        plan.campCity = thisPlan.city;
        plan.campDescription = thisPlan.description;
        plan.campPhone = thisPlan.phone;
        plan.campFee = thisPlan.fee;
        plan.campRes - thisPlan.reservable;
        plan.campLat = thisPlan.lat;
        plan.campLon = thisPlan.lon;
        plan.startDate = thisPlan.start;
        plan.endDate = thisPlan.end;
      } else if (
        thisPlan.activity === "hiking" ||
        thisPlan.activity === "biking"
      ) {
        let activity = {
          activity: thisPlan.activity,
          name: thisPlan.name,
          lat: thisPlan.lat,
          lng: thisPlan.lng,
          difficulty: thisPlan.difficulty,
          length: thisPlan.length,
          summary: thisPlan.summary,
          elevationChange: thisPlan.elevationChange
        };
        activities.push(activity);
      } else if (thisPlan.activity === "climbing") {
        let activity = {
          activity: thisPlan.activity,
          name: thisPlan.name,
          lat: thisPlan.lat,
          lng: thisPlan.lng,
          rating: thisPlan.rating,
          type: thisPlan.type,
        };
        activities.push(activity);
      } else {
        let activity = {
          activity: thisPlan.activity,
          name: thisPlan.name,
          lat: thisPlan.lat,
          lng: thisPlan.lng,
          temperature: thisPlan.temperature,
        };
        activities.push(activity);
      }
    });

    if (activities.length > 0) {
      plan.activities = activities;
    }
    // console.log(plan);

    db.Itinerary.create(plan)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Itinerary.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Itinerary.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeActivity: function (req, res) {
    db.Itinerary.update(
      { _id: req.params.uid },
      { $pull: { activities: { _id: req.params.id } } }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
