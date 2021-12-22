const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hash: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
}, { timestamp: true });

module.exports = mongoose.model('User', userSchema);
