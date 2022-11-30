const Team = require('../model/team');
const jwt = require('jsonwebtoken');

// register user

exports.createTeam = async (req, res) => {
  console.log(req.body);
  console.log(req.headers['auth-token']);
  const team = await Team.findOne({ name: req.body.name });
  if (team) {
    return res.status(409).json({ message: 'team Name already exists' });
  }
  try {
    const { _id } = jwt.decode(req.headers['auth-token']);
    // console.log('decode token ', token.data._id);
    // res.send({ message: 'decoded.' });
    const newTeam = new Team({
      name: req.body.name.trim(),
      contact: req.body.contact.trim(),
      user_Id: _id,
    });
    const team = await Team.create(newTeam);
    res.json({
      message: 'Team Added Successfully...',
      team: team,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getMyTeam = async (req, res) => {
  console.log('team against this id : ', req.params.id);

  const myTeam = await Team.findOne({ _id: id });

  res.send({ myTeam: myTeam });
};

exports.getAvailableTeams = async (req, res) => {
  const availableTeams = await Team.find({ isAvailable: true });

  res.send({ availableTeams: availableTeams });
};
