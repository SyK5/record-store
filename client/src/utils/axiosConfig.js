import axios from "axios";

export const serAxiosDefaults = () => {
  axios.defaults.baseURL = import.meta.env.VITE_CLIENT_URL;

  axios.defaults.withCredentials = true;
};

