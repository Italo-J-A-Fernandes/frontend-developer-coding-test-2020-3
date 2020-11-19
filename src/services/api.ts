import axios from 'axios';

const URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/';

const api = axios.create({
  baseURL: URL,
  timeout: 30000,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'x-requested-with': 'xmlhttprequest',
  },
});

export default api;
