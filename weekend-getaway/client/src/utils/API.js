import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Get campsites based on user input location
  getCampsites: function (city) {
    return axios.get("/api/campsites/", { params: { search: city } });
  },
  getUid: function (uid) {
    console.log("UID is called");
    return axios.post("/api/history/" + uid);
  },
};
