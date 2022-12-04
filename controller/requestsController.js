const Request = require('../model/request');
// const jwt = require('jsonwebtoken');

exports.getPendingRequests = async (req, res) => {};
exports.getReceivedRequests = async (req, res) => {};
exports.sendRequest = async (req, res) => {
  console.log('sending request...');
  const request = await Request.create(req.body);
  if (request) {
    res.json({ status: 'success', request });
  } else {
    res.json({ status: 'failded', message: 'sended request failed...' });
  }
};
