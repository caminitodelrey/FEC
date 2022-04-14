const axios = require('axios');
require('dotenv').config();

function apiRequest(method, endpoint) {
  return axios({
    method: method,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
    url: endpoint,
    headers: {
      'Retry-After': 3600,
      Authorization: process.env.TOKEN,
    },
  });
}

module.exports = { apiRequest };
