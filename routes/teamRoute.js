const express = require('express');
const routes = express.Router();
const controller = require('../controller/teamController');

routes.post('/createTeam', controller.createTeam);
routes.post('/getMyTeam', controller.getMyTeam);
routes.post('/getAvailableTeams', controller.getAvailableTeams);

routes.get('/test', (req, res) => {
  res.send('teams routes working');
});
module.exports = routes;
