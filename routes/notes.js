const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/notes');
});

router.get('/api/notes', async (req, res) => {
  try {
    const notes = await db.notes.findAll({});
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/notes', async (req, res) => {
  try {
    const newNote = await db.notes.create({
      businessId: req.body.businessId,
      note: req.body.note,
    });
    res.json(newNote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/api/notes/:id', async (req, res) => {
  try {
    const updateNote = await db.notes.update(
      {
        note: req.body.note,
      },
      { where: { id: { [Op.eq]: req.body.id } } }
    );
    res.json(updateNote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/api/notes/:id', async (req, res) => {
  try {
    const removeNote = await db.notes.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(removeNote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
