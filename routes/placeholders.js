const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/placeholders');
});

router.get('/api/placeholders', async (req, res) => {
  try {
    const placeholders = await db.placeholders.findAll({});
    res.json(placeholders);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/placeholders/:id', async (req, res) => {
  try {
    const placeholders = await db.placeholders.findOne({
      where: { id: { [Op.eq]: req.params.id } },
    });
    res.json(placeholders);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/placeholders', async (req, res) => {
  try {
    const newPlaceholder = await db.placeholders.create({
      placeholder: req.body.placeholder,
      description: req.body.description,
    });
    res.json(newPlaceholder);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/api/placeholders/:id', async (req, res) => {
  try {
    const updateNote = await db.placeholders.update(
      {
        placeholder: req.body.placeholder,
        description: req.body.description,
      },
      { where: { id: { [Op.eq]: req.body.id } } }
    );
    res.json(updateNote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/api/placeholders/:id', async (req, res) => {
  try {
    const removeNote = await db.placeholders.destroy({
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
