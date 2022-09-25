import axios from "axios";

const appAxios = axios.create({
  baseURL: "http://192.168.1.91:3000",
});

export default appAxios;
