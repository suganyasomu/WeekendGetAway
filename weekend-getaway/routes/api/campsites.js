const router = require("express").Router();
const axios = require("axios");
const key = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

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
//         `https://ridb.recreation.gov/api/v1/facilities?limit=50&offset=0&latitude=${lat}&longitude=${lng}&radius=25&activity=camping`,
//         {
//           headers: {
//             apikey: "605ce036-2745-47d5-a34c-a58f081cd82c", //the token is a variable which holds the token
//           },
//         }
//       )
//       .then(function (res) {
//         console.log(res.data);
//       });
//   });

router.route("/").get(async (req, res) => {
  let city = req.query.search.split(" ").join("");
  let location = await axios.get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${key}&location=${city}`
  );
  let latLng = location.data.results[0].locations[0].latLng;

  axios
    .get(
      `https://ridb.recreation.gov/api/v1/facilities?limit=50&offset=0&latitude=${latLng.lat}&longitude=${latLng.lng}&radius=25&activity=camping`,
      {
        headers: {
          apikey: "605ce036-2745-47d5-a34c-a58f081cd82c",
        },
      }
    )
    .then(function (result) {
      res.json(result.data);
      console.log(result.data);
    });
});

module.exports = router;
