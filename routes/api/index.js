const router = require('express').Router();
const businessRoutes = require('./businesses');
const contactRoutes = require('./contacts');

router.use('/businesses', businessRoutes);
router.use('./contacts', contactRoutes);
