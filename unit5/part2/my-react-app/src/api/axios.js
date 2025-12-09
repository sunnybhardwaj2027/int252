import axios from 'axios'

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000, // avoid hanging requests
});

// OPTIONAL => Request interceptors (adds token later)
api.interceptors.request.use(
  (config) => {
    // example: config.headers.Authorization = "Bearer token"
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptors for errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API Error", error.message);
    return Promise.reject(error);
  }
);

export default api;

// all your api calls now use => api.get("/users")