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
  getUid: function (uid) {
    console.log("UID is called");
    return axios.post("/api/history/" + uid);
  },
};
