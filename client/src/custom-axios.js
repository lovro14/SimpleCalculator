import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://calculator-basic.herokuapp.com/"
});
