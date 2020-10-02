import axios from "axios";

export default axios.create({
  //url used from ngrok change every 8 hours
  baseURL: " http://b211990f8c4c.ngrok.io",
});
