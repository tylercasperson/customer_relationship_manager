const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/api/importantToBusinesses');
});

router.get('/api/importantToBusinesses', async (req, res) => {
  try {
    const importantToBusinesses = await db.importantToBusinesses.findAll({
      // include: [db.contacts],
      include: [db.businesses],
    });
    res.json(importantToBusinesses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
