const router = require("express").Router();
const authKey = "RPmLVpBnGOrz0WFHjzYbYSYdTc7V0w851ySBqxfn";
const axios = require("axios");
const mapKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

function distance(lat1, lon1, lat2, lon2) {
  let p = Math.PI / 180;
  let c = Math.cos;
  let a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 3963 * 2 * Math.asin(Math.sqrt(a));
}

router.route("/").get(async (req, res) => {
  let city = req.query.search.split(" ").join("");
  let location = await axios.get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${city}`
  );
  let state = location.data.results[0].locations[0].adminArea3;
  let latLng = res.data.results[0].locations[0].latLng;

  axios
    .get(
      `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${authKey}`
    )
    .then(function (result) {
      let list = result.data.data;

      let parks = [];

      list.forEach((thisPark) => {
        let radius = distance(
          latLng.lat,
          latLng.lng,
          thisPark.latitude,
          thisPark.longitude
        );

        let info = {
          name: thisPark.fullName,
          description: thisPark.description,
          lat: thisPark.latitude,
          lng: thisPark.longitude,
        };
        if (radius < 100) {
          // possible change radius
          parks.push(info);
        }
      });
      res.json(parks);
    });
});

module.exports = router;
