import axios from 'axios'
const axiosInstance = axios.create();  // create a new instance of axios
axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL // set the base url
axiosInstance.defaults.withCredentials = true; // allow cookie to be sent with request
export default axiosInstance;

