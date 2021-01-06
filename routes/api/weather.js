const router = require("express").Router();
const axios = require("axios");
const authKey = "5d1c7596956991e51b3545595059228a";
const mapKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";
let displayDate;

function unixTime(dt) {
  let date = new Date(dt * 1000);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  displayDate = month + "/" + day + "/" + year;
}

router.route("/").get(async (req, res) => {
  let city = req.query.search.split(" ").join("");
  let location = await axios.get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${city}`
  );
  let latLng = location.data.results[0].locations[0].latLng;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latLng.lat}&lon=${latLng.lng}&exclude=hourly,minutely&appid=${authKey}&units=imperial`
    )
    .then(function (result) {
      let list = result.data.daily;

      let forecast = [];

      list.forEach((thisDay) => {
        unixTime(thisDay.dt);

        let info = {
          date: displayDate,
          temp: thisDay.temp.day,
          wind: thisDay.wind_speed,
          weather: thisDay.weather[0].main,
          pop: thisDay.pop, // Probability of precipitation
          uvi: thisDay.uvi,
          humidity: thisDay.humidity,
        };
        forecast.push(info);
      });

      res.json(forecast);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
