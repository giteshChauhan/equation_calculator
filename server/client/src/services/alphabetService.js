/** AlphabetService returns the alphabet with their number from mongodb atlas database. */
import axios from "axios";

const httpService = axios.create({ baseURL: process.env.REACT_APP_API_URL });

httpService.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

const apiEndPoint = "/alphabet/";

export function getAlphabets() {
  return httpService.get(apiEndPoint);
}
