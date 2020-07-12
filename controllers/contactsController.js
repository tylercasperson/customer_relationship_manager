const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
    res.redirect('/api/contacts');
});

router.get('/api/contacts', function(req, res) {
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

router.get('/api/contacts/:id', function(req, res) {
    db.contacts.findOne(({
        where: {
            id: req.params.id
        }
    }))
    .then(function(dbcontacts) {
        var contactsObject = {
            contacts: dbcontacts
        };
        return res.json(contactsObject);
    });
});

router.post('/api/contacts', function(req, res) {
    db.contacts.create(({
        where: {
            id: req.params.id
        }
    }))
    .then(function(dbcontacts) {
        var contactsObject = {
            contacts: dbcontacts
        };
        return res.json(contactsObject);
    });
});

router.put('/api/contacts/:id', function(req, res) {
    db.contacts.update(
        req.body,
        {
        where: {
            id: req.params.id
        }
    })
    .then(function(dbcontacts) {
        var contactsObject = {
            contacts: dbcontacts
        };
        return res.json(contactsObject);
    });
});

router.delete('/api/contacts/:id', function(req, res) {
    db.contacts.destroy(({
        where: {
            id: req.params.id
        }
    }))
    .then(function(dbcontacts) {
        var contactsObject = {
            contacts: dbcontacts
        };
        return res.json(contactsObject);
    });
});

module.exports = router;
