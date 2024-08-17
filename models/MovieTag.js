const mongoose = require('../db');

const movieTagSchema = new mongoose.Schema({
  name: String,
  note_id: { type: mongoose.Schema.Types.ObjectId, ref: 'MovieNote' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('MovieTag', movieTagSchema);
