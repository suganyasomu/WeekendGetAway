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

// const authKey = "200881533-cbba50330892ef7f2dd269f567c7d3dd";
// const axios = require("axios");

// const location = "Seaside,OR";
// const key = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

// axios
//   .get(
//     `http://open.mapquestapi.com/geocoding/v1/address?key=${key}&location=${location}`
//   )
//   .then(function (res) {
//     let lat = res.data.results[0].locations[0].latLng.lat;
//     let lng = res.data.results[0].locations[0].latLng.lng;

//     console.log(lat, lng);
//     axios
//       .get(
//         `https://www.mtbproject.com/data/get-trails?lat=${lat}&lon=${lng}&key=${authKey}`
//       )
//       .then(function (res) {
//         console.log(res.data);
//       });
//   });
