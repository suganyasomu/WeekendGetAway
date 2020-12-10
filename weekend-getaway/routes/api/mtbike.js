const router = require("express").Router();
const axios = require("axios");
const authKey = "200881533-cbba50330892ef7f2dd269f567c7d3dd";
const mapKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

router.route("/").get(async (req, res) => {
  let city = req.query.search.split(" ").join("");
  let location = await axios.get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${city}`
  );
  let latLng = location.data.results[0].locations[0].latLng;

  axios
    .get(
      `https://www.mtbproject.com/data/get-trails?lat=${latLng.lat}&lon=${latLng.lng}&key=${authKey}`
    )
    .then(function (result) {
      res.json(result.data);
      console.log(result.data);
    });
});

module.exports = router;
