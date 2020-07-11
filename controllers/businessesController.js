const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');
const db = require('../models');

router.get('/', function(req, res) {
    res.redirect('/api/businesses');
});

router.get('/businesses', function(req, res) {
    db.businesses.findAll(({
        include: [db.contacts]
    }))
    .then(function(dbbusinesses) {
        var businessesObject = {
            businesses: dbbusinesses
        };
        return res.json(businessesObject);
    });
});

router.get('/api/businesses/:id', function(req, res) {
    db.businesses.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(function(dbbusinesses) {
        res.json(dbbusinesses);
    });
});

router.post('/api/businesses/:id', function(req, res) {
    db.businesses.create({
        where: {
            id: req.params.id
        }
    })
    .then(function(dbbusinesses) {
        res.json(dbbusinesses);
    });
});

router.put('/api/businesses', function(req, res) {
    db.businesses.update(
        req.body,
        {
            where: {
                id: req.params.id
            }
        })
    .then(function(dbbusinesses) {
        res.json(dbbusinesses);
    });
});

router.delete('/api/businesses/:id', function(req,res) {
    db.businesses.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbbusinesses) {
        res.json(dbbusinesses);
    });
});

module.exports = router;