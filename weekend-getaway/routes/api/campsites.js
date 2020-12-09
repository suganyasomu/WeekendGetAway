// const router = require("express").Router();
const axios = require("axios");

// TODO
// Need to get the lat and long

// router.get(
//   ("/",
//   function (req, res) {

//   })
// );

const key = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

axios
  .get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${key}&location=Bend,OR`
  )
  .then(function (res) {
    let lat = res.data.results[0].locations[0].latLng.lat;
    let lng = res.data.results[0].locations[0].latLng.lng;

    console.log(lat, lng);
    axios
      .get(
        `https://ridb.recreation.gov/api/v1/facilities?limit=50&offset=0&latitude=${lat}&longitude=${lng}&radius=25&activity=camping`,
        {
          headers: {
            apikey: "605ce036-2745-47d5-a34c-a58f081cd82c", //the token is a variable which holds the token
          },
        }
      )
      .then(function (res) {
        console.log(res.data);
      });
  });

// module.exports = router;
