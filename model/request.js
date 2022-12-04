const mongoose = require('mongoose');
const { Schema } = mongoose;
const requestSchema = mongoose.Schema(
  {
    sendTo_Id: {
      type: String,
      require: true,
    },
    sendBy_Id: {
      // type: Schema.Types.ObjectId, ref: 'team'
      type: String,
      require: true,
    },
    status: {
      type: String,
      default: 'pending',
    },
    matchDate: {
      type: String,
      // default:
      //   new Date().getMonth() +
      //   1 +
      //   '/' +
      //   new Date().getDate +
      //   '/' +
      //   new Date().getFullYear(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Request', requestSchema);
