import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Get campsites based on user input location
  getCampsites: function (city) {
    return axios.get("/api/campsite/", { params: { search: city } });
  },
  getHike: function (city) {
    return axios.get("/api/hike/", { params: { search: city } });
  },
  getBike: function (city) {
    return axios.get("/api/mtbike/", { params: { search: city } });
  },
  getLocation: function (city) {
    return axios.get("/api/location/", { params: { search: city } });
  },
  getWeather: function (city) {
    return axios.get("/api/weather/", { params: { search: city } });
  },
  getHotspring: function (city) {
    return axios.get("/api/hotspring", { params: { search: city } });
  },
  getClimb: function (city) {
    return axios.get("/api/climbing", { params: { search: city } });
  },
  getNatParks: function (city) {
    return axios.get("/api/natParks", { params: { search: city } });
  },
  getUid: function (uid) {
    console.log("UID is called");
    return axios.post("/api/history/" + uid);
  },
  saveToItinerary: function (campData) {
    return axios.post("/api/itinerary/", campData);
  },
  getItinerary: function (uid) {
    // console.log(uid);
    return axios.get("/api/itinerary/", { params: { user: uid } });
  },
  sendGeolocation: function(lat, lon) {
    return axios.post("/api/geolocation/", { params: { latitude: lat, longitude: lon} })
  }
};
