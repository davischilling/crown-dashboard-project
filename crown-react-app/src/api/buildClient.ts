import axios from "axios";

const api = axios.create({
  baseURL: "https://crown.mobilesoftapps.it/api/v1",
});

export default api;
