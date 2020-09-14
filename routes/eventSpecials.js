const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/eventSpecials');
});

router.get('/api/eventSpecials', async (req, res) => {
  try {
    const eventSpecials = await db.eventSpecials.findAll({
      include: [{ model: db.businesses }, { model: db.events }],
    });
    res.json(eventSpecials);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/eventSpecials/:eventId', async (req, res) => {
  try {
    const eventSpecials = await db.eventSpecials.findAll({
      where: { eventId: { [Op.eq]: req.params.eventId } },
    });
    res.json(eventSpecials);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/eventSpecials', async (req, res) => {
  try {
    const addSpecial = await db.eventSpecials.create({
      eventId: req.body.eventId,
      special: req.body.special,
    });
    res.json(addSpecial);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/api/eventSpecials/:id', async (req, res) => {
  try {
    const updateSpecial = await db.eventSpecials.update(
      {
        eventId: req.body.eventId,
        special: req.body.special,
      },
      { where: { id: { [Op.eq]: req.body.id } } }
    );
    res.json(updateSpecial);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/api/eventSpecials/:id', async (req, res) => {
  try {
    const removeSpecial = await db.eventSpecials.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(removeSpecial);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/api/eventSpecials/:eventId', async (req, res) => {
  try {
    const removeEventSpecial = await db.eventSpecials.destroy({
      where: {
        eventId: req.params.eventId,
      },
    });
    res.json(removeEventSpecial);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
