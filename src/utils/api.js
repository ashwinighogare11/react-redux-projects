import axios from "axios";

let BWApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://vanillainstal1.wpengine.com/wp-json',
  headers: {
    'Content-Type': 'application/json',
  },
});

 // Set the AUTH token for every request
 BWApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

const get = (url) => {
  return BWApi.get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

const post = (url, data) => {
  return BWApi.post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export { get, post };
