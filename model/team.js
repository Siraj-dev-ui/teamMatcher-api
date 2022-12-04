const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    contact: {
      type: String,
      require: true,
    },
    // user_Id: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user',
    // },
    user_Id: {
      type: String,
      require: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Team', teamSchema);
