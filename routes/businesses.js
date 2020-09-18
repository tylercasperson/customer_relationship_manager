const express = require('express');
const router = express.Router();
const db = require('../models');
const { Op } = require('sequelize');

router.get('/', function (req, res) {
  res.redirect('/api/businesses');
});

router.get('/api/businesses', async (req, res) => {
  try {
    const businesses = await db.businesses.findAll({
      include: [
        { model: db.products },
        { model: db.businessRatings },
        { model: db.importantToBusinesses },
        {
          model: db.events,
          as: 'eventBooth',
          include: [{ model: db.businesses }],
        },
        {
          model: db.events,
          as: 'eventAttendance',
          include: [
            {
              model: db.businesses,
            },
          ],
        },
        { model: db.reports },
      ],
      // where: { id: { [Op.lt]: 10 } },
      order: [['id', 'ASC']],
    });
    res.json(businesses);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

// router.get('/api/businesses/:id', async (req, res) => {
//   console.log(req.params);
//   try {
//     const businesses = await db.businesses.findAll({
//       where: { id: { [Op.eq]: req.params.id } },
//     });
//     res.json(businesses);
//   } catch (err) {
//     console.error(err.msg);
//     res.status(500).send('Server Error');
//   }
// });

router.get('/api/businesses/:id', async (req, res) => {
  try {
    const businesses = await db.businesses.findAll({
      include: [
        {
          model: db.events,
          as: 'eventAttendance',
          include: [
            {
              model: db.businesses,

              include: [
                { model: db.products },
                { model: db.businessRatings },
                { model: db.importantToBusinesses },
                {
                  model: db.events,
                  as: 'eventBooth',
                  include: [{ model: db.businesses }],
                },
                {
                  model: db.events,
                  as: 'eventAttendance',
                  include: [
                    {
                      model: db.businesses,
                    },
                  ],
                },
                { model: db.reports },
              ],
            },
          ],
        },
      ],
      where: {
        '$eventAttendance.eventId$': req.params.id,
      },
    });
    res.json(businesses);
  } catch (err) {
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

router.post('/api/businesses', function (req, res) {
  db.businesses
    .create({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
});

router.put('/api/businesses/:id', function (req, res) {
  db.businesses
    .update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
});

router.delete('/api/businesses/:id', function (req, res) {
  db.businesses
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
});

module.exports = router;
