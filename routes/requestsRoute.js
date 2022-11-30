const express = require('express');
const routes = express.Router();
const controller = require('../controller/requestsController');

routes.get('/getPendingRequests/:id', controller.getPendingRequests);
routes.get('/getReceivedRequests/:id', controller.getReceivedRequests);
// routes.get('/getAvailableTeams', controller.getAvailableTeams);

routes.get('/test', (req, res) => {
  res.send('request routes working');
});
module.exports = routes;
