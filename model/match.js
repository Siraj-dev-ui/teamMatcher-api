const mongoose = require('mongoose');
const matchSchema = mongoose.Schema(
  {
    winnerTeamId: {
      type: String,
    },
    loserTeamId: {
      type: String,
    },
    requestId: {
      type: String,
    },
    ground: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Match', matchSchema);
