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

    console.log(itinerary);

    let plan = {};
    // let activities = [];

    itinerary.forEach((thisPlan) => {
      console.log(thisPlan.activity);
      if (thisPlan.activity === "camping") {
        plan.campsite = thisPlan.name;
        plan.user = thisPlan.user;
        plan.campLat = thisPlan.lat;
        plan.campLon = thisPlan.lon;
        plan.startDate = thisPlan.start;
        plan.endDate = thisPlan.end;
      }
    });

    console.log(plan);

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
};
