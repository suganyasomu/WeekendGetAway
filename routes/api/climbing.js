const router = require("express").Router();
const authKey = "200881533-6864765164417404bf20649951698814";
const axios = require("axios");
const mapKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

router.route("/").get(async (req, res) => {
  let city = req.query.search.split(" ").join("");
  let location = await axios.get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${city}`
  );
  let latLng = location.data.results[0].locations[0].latLng;

  axios
    .get(
      `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${latLng.lat}&lon=${latLng.lng}&key=${authKey}`
    )
    .then(function (result) {
      let list = result.data.routes;

      let routes = [];

      list.forEach(function (thisRoute) {
        let info = {
          id: thisRoute.id,
          name: thisRoute.name,
          type: thisRoute.type,
          rating: thisRoute.rating,
          lat: thisRoute.latitude,
          lng: thisRoute.longitude,
          pitches: thisRoute.pitches !== "" ? thisRoute.pitches : 0,
          url: thisRoute.url,
          image: thisRoute.imgMedium,
          activity: "climbing",
        };
        routes.push(info);
      });
      res.json(routes);
    });
});

module.exports = router;
