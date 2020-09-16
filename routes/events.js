const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/events');
});

router.get('/api/events', async (req, res) => {
  try {
    const events = await db.events.findAll({
      include: [{ model: db.eventSpecials }],
    });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/events/:eventId', async (req, res) => {
  try {
    const events = await db.events.findAll({
      include: [{ model: db.events }],
      where: { eventId: { [Op.eq]: req.params.eventId } },
    });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/api/events/:businessId', async (req, res) => {
  console.log(req.params);
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

router.get('/api/events/:eventId/:businessId', async (req, res) => {
  try {
    const events = await db.events.findAll({
      where: {
        eventId: { [Op.eq]: req.params.eventId },
        businessId: { [Op.eq]: req.params.businessId },
      },
    });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/api/events/:eventId/:businessId', async (req, res) => {
  try {
    const newEvent = await db.events.create({
      eventId: req.body.eventId,
      businessId: req.body.businessId,
      booth: req.body.booth,
      startDateTime: req.body.startDateTime,
      endDateTime: req.body.endDateTime,
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/api/events/:eventId/:businessId', async (req, res) => {
  try {
    const updateEvent = await db.events.update(
      {
        booth: req.body.booth,
        startDateTime: req.body.startDateTime,
        endDateTime: req.body.endDateTime,
      },
      {
        where: {
          eventId: { [Op.eq]: req.params.eventId },
          businessId: { [Op.eq]: req.params.businessId },
        },
      }
    );
    res.json(updateEvent);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/api/events/:eventId/:businessId', async (req, res) => {
  try {
    const removeNote = await db.events.destroy({
      where: {
        eventId: { [Op.eq]: req.params.eventId },
        businessId: { [Op.eq]: req.params.businessId },
      },
    });
    res.json(removeNote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/api/events/:eventId', async (req, res) => {
  try {
    const removeNote = await db.events.destroy({
      where: {
        eventId: { [Op.eq]: req.params.eventId },
      },
    });
    res.json(removeNote);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
