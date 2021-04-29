const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/contacts');
});

router.get('/api/contacts', async (req, res) => {
  console.log(db.models);
  console.log(db.contacts.findAll());
  console.log('end');
  try {
    const contacts = await db.contacts.findAll({
      // include: [
      //   {
      //     model: db.contactLists,
      //     include: {
      //       model: db.contactTypes,
      //       where: { id: { [Op.or]: { [Op.gt]: 3, [Op.eq]: 1 } } },
      //     },
      //   },
      //   {
      //     model: db.contactBusinessFunctions,
      //     include: [{ model: db.businessFunctions }, { model: db.roles }],
      //   },
      // ],
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
