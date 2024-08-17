const mongoose = require('../db');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
