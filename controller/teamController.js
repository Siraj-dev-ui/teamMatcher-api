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

// / Login User

// exports.createTeam = async (req, res) => {
//   console.log(req.body);
//   const team = await User.findOne({ name: req.body.name });
//   console.log(user);
//   if (!user) {
//     return res.status(404).json({ message: 'User does not exist' });
//   }
//   bcrypt.compare(req.body.password, user.password, function (err, result) {
//     if (result) {
//       const token = jwt.sign(
//         {
//           data: { _id: user._id },
//         },
//         process.env.SECRET_KEY,
//         {
//           expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
//         }
//       );
//       return res.send({
//         token,
//         status: 'success',
//       });
//     } else {
//       return res.status(403).json({ message: 'Incorrect Password...' });
//     }
//   });
// };
