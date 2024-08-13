import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080/",
});
export const createCancelToken = () => {
  return axios.CancelToken.source();
};
