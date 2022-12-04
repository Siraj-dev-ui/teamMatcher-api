const express = require('express');
const routes = express.Router();
const controller = require('../controller/userController');

routes.post('/updateupdate', controller.notWorkingController);
routes.post('/testtest', controller.testController);

// routes.post('/register', controller.addUser);

routes.get('/test', (req, res) => {
  res.send('user routes working 54454');
});
module.exports = routes;
