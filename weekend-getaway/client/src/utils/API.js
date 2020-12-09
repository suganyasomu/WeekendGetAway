import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Get campsites based on user input location
  getCampsites: function(id) {
    return axios.get("/api/campsites/" + id);
  },
  getUid:function(uid){
    console.log("UID is called");
    return axios.post("/api/history/"+ uid);
  }

};