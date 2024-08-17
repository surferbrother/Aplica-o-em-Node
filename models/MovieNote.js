const mongoose = require('../db');

const movieNoteSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MovieNote', movieNoteSchema);
