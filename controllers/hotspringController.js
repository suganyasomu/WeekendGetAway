const db = require("../models");
const axios = require("axios");
const mapKey = "hVo9dYzXvu21iSyKZbnJiYJOdbtvRCDN";

// Defining methods for the hotspringController
module.exports = {
  findAll: async function(req, res) {

    console.log(req.body);
    let city = req.query.search.split(" ").join("");
    let location = await axios.get(
      `http://open.mapquestapi.com/geocoding/v1/address?key=${mapKey}&location=${city}`
      );
      let long = location.data.results[0].locations[0].latLng.lng;
      let lat =  location.data.results[0].locations[0].latLng.lat;
      console.log(long, lat);
    
      let milesToRadian = function(miles){
        var earthRadiusInMiles = 3963;
        return miles / earthRadiusInMiles;
      };
    
    var query = {"loc" : {$geoWithin: { $centerSphere: [ [long, lat], milesToRadian(25) ] }}}
    console.log(query);

    db.Hotspring
      .find({loc : {$geoWithin: { $centerSphere: [ [long, lat], milesToRadian(25) ] }}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Hotspring
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
