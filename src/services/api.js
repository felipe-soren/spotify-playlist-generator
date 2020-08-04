import axios from "axios";

const api = axios.create({
  baseURL: "https://oauth-spotify-playlist-generat.herokuapp.com/",
});

export default api;
