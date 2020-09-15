import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challange-2d234/us-central1/api",
});

export default instance;
