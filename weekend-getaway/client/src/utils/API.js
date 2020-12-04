import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all users
  getUsers: function() {
    return axios.get('https://ridb.recreation.gov/api/v1/activities?limit=50&offset=0:', {
        headers: {
       apikey: '605ce036-2745-47d5-a34c-a58f081cd82c'  //the token is a variable which holds the token
        }
        })
      .then(function(res) {
        console.log(res.data);
      });
  },

  
};