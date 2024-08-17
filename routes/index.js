const express = require('express');
const router = express.Router();
const MovieNote = require('../models/MovieNote');
const MovieTag = require('../models/MovieTag');

// Rota para criar um novo filme
router.post('/movies', async (req, res) => {
  const { title, description, rating, userId } = req.body;
  const movieNote = new MovieNote({ title, description, rating, user_id: userId });

  try {
    await movieNote.save();
    res.status(201).json(movieNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para adicionar uma tag a um filme
router.post('/movies/:id/tags', async (req, res) => {
  const { name, userId } = req.body;
  const { id } = req.params;
  const movieTag = new MovieTag({ name, note_id: id, user_id: userId });

  try {
    await movieTag.save();
    res.status(201).json(movieTag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
