const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/api/services');
});

router.get('/api/services', async (req, res) => {
  try {
    const services = await db.serviceBusinesses.findAll({
      include: db.services,
    });
    res.json(services);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
