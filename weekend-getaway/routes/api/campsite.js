const router = require("express").Router();
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
      `https://ridb.recreation.gov/api/v1/facilities?limit=50&offset=0&latitude=${latLng.lat}&longitude=${latLng.lng}&radius=25&activity=camping`,
      {
        headers: {
          apikey: "605ce036-2745-47d5-a34c-a58f081cd82c",
        },
      }
    )
    .then(function (result) {
      let list = result.data.RECDATA;

      let campsites = [];

      list.forEach(function (thisCampsite) {
        let info = {
          name: thisCampsite.FacilityName,
          lat: thisCampsite.FacilityLatitude,
          lng: thisCampsite.FacilityLongitude,
          reservable: thisCampsite.Reservable,
          phone: thisCampsite.FacilityPhone,
          fee: thisCampsite.FacilityUseFeeDescription,
          description: thisCampsite.FacilityDescription,
          activity: "camping",
        };
        campsites.push(info);
      });
      res.json(campsites);
    });
});

module.exports = router;
