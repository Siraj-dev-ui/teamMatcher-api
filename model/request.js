const mongoose = require('mongoose');
const {Schema} = mongoose
const requestSchema = mongoose.Schema(
  {
    sendTo_Id: {
      type: Schema.Types.ObjectId, ref: 'team'
    },
    sendBy_Id: {
      type: Schema.Types.ObjectId, ref: 'team'
    },
    status: {
      type: String,
    },
    matchDate: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Request', requestSchema);
