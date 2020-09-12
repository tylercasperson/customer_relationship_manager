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
    console.error(err.msg);
    res.status(500).send('Server Error');
  }
});

router.get('/api/notes/:businessId', async (req, res) => {
  try {
    const count = await db.notes.count({
      where: {
        businessId: {
          [Op.eq]: req.params.businessId,
        },
      },
    });
    res.json(count);
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
    console.log('error');
    console.error(err);
    console.log('Server Error');
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
    console.log('error');
    console.error(err);
    console.log('Server Error');
  }
});

// router.post('/api/notes', async (req, res) => {
//   try {
//     const notes = await db.notes.create({
//       businessID: businessID,
//       note: res.json.note,
//     });
//     res.json(notes);
//   } catch (err) {
//     console.error(err.msg);
//     res.status(500).send('Server Error');
//   }
// });

// router.get('/api/notes', async (req, res) => {
//   try {
//     const businesses = await db.businesses.findAll({
//       include: [
//         { model: db.products },
//         { model: db.businessRatings },
//         { model: db.notes },
//         { model: db.importantToBusinesses },
//         { model: db.businessEvents, as: 'event', include: db.businesses },
//         {
//           model: db.businessEvents,
//           include: [
//             {
//               model: db.businesses,
//             },
//             // {
//             //   model: db.eventDeals,
//             // },
//           ],
//         },
//         { model: db.reports },
//       ],
//       // where: { id: { [Op.lt]: 10 } },
//       order: [['id', 'ASC']],
//     });
//     res.json(businesses);
//   } catch (err) {
//     console.error(err.msg);
//     res.status(500).send('Server Error');
//   }
// });

router.get('/api/businesses/:id', function (req, res) {
  db.businesses
    .findOne({
      // include: [db.importantToBusiness],
      where: {
        id: req.params.id,
      },
    })
    .then(function (dbbusinesses) {
      res.json(dbbusinesses);
    });
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
