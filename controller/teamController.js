const Team = require('../model/team');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// register user

exports.createTeam = async (req, res) => {
  console.log(req.body);
  // console.log(req.headers['auth-token']);
  const team = await Team.findOne({ name: req.body.name });
  if (team) {
    return res.json({ status: 'failed', message: 'team Name already exists' });
  }
  try {
    // const { _id } = jwt.decode(req.headers['auth-token']);
    // console.log('decode token ', token.data._id);
    // res.send({ message: 'decoded.' });
    const newTeam = new Team({
      name: req.body.name.trim(),
      contact: req.body.contact.trim(),
      user_Id: req.body.user_Id,
    });
    const team = await Team.create(newTeam);
    res.json({
      status: 'success',
      message: 'Team Added Successfully...',
      team: team,
    });
  } catch (err) {
    res.status(500).json({ status: 'failed', message: err });
  }
};

exports.getMyTeam = async (req, res) => {
  console.log('team against this id : ', req.body._id);
  console.log('type of id : ', typeof req.body._id);
  // const {_id} = jwt.decode(req.body.token)
  const myTeam = await Team.findOne({ user_Id: req.body._id });
  console.log('team founded : ', myTeam);
  if (myTeam) {
    res.json({ status: 'success', myTeam: myTeam });
  } else {
    res.json({ status: 'failed', message: 'no teams' });
  }
};

exports.getAvailableTeams = async (req, res) => {
  console.log('getting available teams : ');
  const { _id } = req.body;
  // const availableTeams = await Team.find({ isAvailable: true });
  const availableTeams = await Team.find({
    $and: [{ isAvailable: true }, { _id: { $ne: _id } }],
  });
  // db.inventory.find({
  //   $and: [{ isAvailable: true }, { user_Id: { $ne: _id } }],
  // });
  if (availableTeams) {
    res.json({ status: 'success', availableTeams: availableTeams });
  } else {
    res.json({ status: 'failed', message: 'no team available' });
  }
};
