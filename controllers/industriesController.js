const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/api/industries');
});

router.get('/api/industries', async (req, res) => {
  try {
    const industries = await db.businessIndustries.findAll({
      include: db.industries,
    });
    res.json(industries);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
