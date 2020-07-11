const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
    res.redirect('/api/contacts');
});

router.get('/contacts', function(req, res) {
    db.contacts.findAll(({
        include: [{
            model: db.businesses,
        }, {
            model: db.contactTypes
        }, {
            model: db.roles
        }, {
            model: db.businessFunctions
        }]
    }))
    .then(function(dbcontacts) {
        var contactsObject = {
            contacts: dbcontacts
        };
        return res.json(contactsObject);
    });
});

module.exports = router;
