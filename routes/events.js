const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/events');
});

router.get('/api/events', async (req, res) => {
  try {
    const events = await db.events.findAll({});
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/events/:businessId', async (req, res) => {
  try {
    const events = await db.events.findAll({
      where: { businessId: { [Op.eq]: req.params.businessId } },
    });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/events', async (req, res) => {
  try {
    const newNote = await db.events.create({
      businessId: req.body.businessId,
      note: req.body.note,
    });
    res.json(newNote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/api/events/:id', async (req, res) => {
  try {
    const updateNote = await db.events.update(
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

router.delete('/api/events/:id', async (req, res) => {
  try {
    const removeNote = await db.events.destroy({
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
