import axios from "axios";

export default axios.create({
  baseURL: "https://bazinga-dev.herokuapp.com/api/v1",
  responseType: "json"
});