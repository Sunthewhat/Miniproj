import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://petworldapi.sunthewhat.com/",
  withCredentials: true,
});

export default axiosInstance;
