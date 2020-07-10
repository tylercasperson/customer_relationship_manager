const express = require('express');
const router = express.Router();
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

module.exports = router;