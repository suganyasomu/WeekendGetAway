const router = require("express").Router();
const axios = require("axios");
const authKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

router.route("/").get((req, res) => {
  let location = JSON.parse(req.query.location);

  axios
    .get(
      `https://www.mapquestapi.com/directions/v2/route?key=${authKey}&from=${location.userLat},${location.userLon}&to=${location.campLat},${location.campLon}`
    )
    .then(function (results) {
      let response = results.data.route;

      let list = response.legs[0].maneuvers;

      let route = {};
      let legs = [];

      route.totalTime = response.formattedTime;
      route.totalDistance = response.distance;

      // console.log(list);
      list.forEach(function (thisTurn) {
        let maneuver = {
          distance: thisTurn.distance,
          streets: thisTurn.streets.toString(),
          narrative: thisTurn.narrative,
          turnIcon: thisTurn.iconUrl,
        };
        legs.push(maneuver);
      });
      route.directions = legs;
      res.json(route);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
