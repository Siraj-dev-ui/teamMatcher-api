const express = require('express');
const routes = express.Router();
const controller = require('../controller/teamController');

routes.post('/createTeam', controller.createTeam);
routes.get('/getMyTeam/:id', controller.getMyTeam);
routes.get('/getAvailableTeams', controller.getAvailableTeams);

routes.get('/test', (req, res) => {
  res.send('teams routes working');
});
module.exports = routes;
