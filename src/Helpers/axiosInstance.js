// import axios from 'axios'

// const axiosInstance = axios.create(); // create a new instance of an object 
// // set the base url 
// axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
// // allow cookies to be sent with request
// axiosInstance.defaults.withCredentials = true;


// export default axiosInstance;




//  import axios from "axios";
 
//  const axiosInstance = axios.create(); // Create a new instance of axios
 
//  axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // Set the base URL
 
//  axiosInstance.defaults.withCredentials = true; // Allow cookies to be sent with requests
 
//  export default axiosInstance;





import axios from 'axios';

const axiosInstance = axios.create(); // create a new instance of axios

axiosInstance.defaults.baseURL  = import.meta.env.VITE_BACKEND_URL;

axiosInstance.defaults.withCredentials = true;  // allow cookies to be sent with request 

export default axiosInstance;