const Team = require('../model/team');
// const jwt = require('jsonwebtoken');

// register user

exports.testController = async (req, res) => {
  console.log(req.body);
  res.json('res res');
};

exports.notWorkingController = async (req, res) => {
  const { teamId, available } = req.body;
  // const availableTeams = await Team.save({ isAvailable: true });
  const team = await Team.findById(teamId);
  if (team) {
    team.available = available;
    const update = await team.save();
    res.json({
      status: 'success',
      message: 'availability updated...',
      update: update,
    });
  } else {
  }

  // console.log('after updatation : ', availableTeams);

  // res.json({ availableTeams: availableTeams });
};
