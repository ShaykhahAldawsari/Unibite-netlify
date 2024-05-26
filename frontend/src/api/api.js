import axios from "axios";

const API = axios.create({
  baseURL: "https://us-central1-unibite-21494.cloudfunctions.net/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
