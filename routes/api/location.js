const router = require("express").Router();
const axios = require("axios");
const mapKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

router.route("/").get(async (req, res) => {
  let searchCity = req.query.search.split(" ").join("");
  let location = await axios.get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${searchCity}`
  );

  let info = location.data.results[0].locations[0];

  let search = {
    location: { city: info.adminArea5, state: info.adminArea3 },
    latLng: info.latLng,
  };

  res.json(search);
});

module.exports = router;
