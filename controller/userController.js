const Team = require('../model/team');
// const jwt = require('jsonwebtoken');

// register user

exports.setTeamAvailability = async (req, res) => {
  const teamId = req.body._id;
  const availableTeams = await Team.save({ isAvailable: true });

  res.send({ availableTeams: availableTeams });
};
