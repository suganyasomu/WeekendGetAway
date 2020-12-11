const router = require("express").Router();
const authKey = "200881533-cbba50330892ef7f2dd269f567c7d3dd";
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
      `https://www.hikingproject.com/data/get-trails?lat=${latLng.lat}&lon=${latLng.lng}&key=${authKey}`
    )
    .then(function (result) {
      let list = result.data.trails;

      let hikes = [];

      list.forEach(function (thisHike) {
        let info = {
          name: thisHike.name,
          lat: thisHike.latitude,
          lng: thisHike.longitude,
          summary: thisHike.summary,
          elevationChange: Math.abs(thisHike.high - thisHike.low),
          difficulty: thisHike.difficulty,
          url: thisHike.url,
          length: thisHike.length,
          image: thisHike.imgSmall,
          condition: thisHike.conditionStatus,
        };
        hikes.push(info);
      });
      res.json(hikes);
    });
});

module.exports = router;
