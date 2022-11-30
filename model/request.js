const mongoose = require('mongoose');
const requestSchema = mongoose.Schema(
  {
    sendTo_Id: {
      type: String,
    },
    sendBy_Id: {
      type: String,
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

module.exports('Request', requestSchema);
