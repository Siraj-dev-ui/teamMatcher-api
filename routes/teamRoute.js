const express = require('express');
const routes = express.Router();
const controller = require('../controller/teamController');

routes.post('/create', controller.createTeam);

// routes.post('/register', controller.addUser);

routes.get('/test', (req, res) => {
  res.send('teams routes working');
});
module.exports = routes;
