const axios = require("axios");
const authKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

const start = { lat: 44.052151, lon: -123.091187 };
const end = { lat: 48.751911, lon: -122.478683 };

axios
  .get(
    `https://www.mapquestapi.com/directions/v2/route?key=${authKey}&from=${start.lat},${start.lon}&to=${end.lat},${end.lon}`
  )
  .then(function (res) {
    console.log(res.data.route.legs[0].maneuvers);
  });
