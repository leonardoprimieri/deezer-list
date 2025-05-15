import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.deezer.com",
  headers: {
    "Allow-Control-Allow-Origin": "*",
  },
});
