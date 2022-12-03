const express = require('express');
const routes = express.Router();
const controller = require('../controller/userController');

routes.post('/setAvailability', controller.setTeamAvailability);

// routes.post('/register', controller.addUser);

routes.get('/test', (req, res) => {
  res.send('user routes working');
});
module.exports = routes;
