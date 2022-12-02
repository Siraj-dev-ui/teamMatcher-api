const mongoose = require('mongoose');
const matchSchema = mongoose.Schema(
  {
    winnerTeamId: {
      type: Schema.Types.ObjectId, ref: 'team'
    },
    loserTeamId: {
      type: Schema.Types.ObjectId, ref: 'team'
    },
    requestId: {
      type: Schema.Types.ObjectId, ref: 'request'
    },
    ground: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Match', matchSchema);
