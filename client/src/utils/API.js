import axios from "axios";

// Export an object containing methods we'll use for accessing from a Car Api

//Find API for Cars to generate list of Cars

export default {
  getCars: function() {
    return axios.get("");
  }
};