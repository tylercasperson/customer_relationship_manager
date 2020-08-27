const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// router.get('/', function (req, res) {
//   res.redirect('/api/users');
// });

// router.get('/api/users', async (req, res) => {
//   try {
//     const users = await db.users.findAll({});
//     res.json(users);
//   } catch (err) {
//     console.error(err.msg);
//     res.status(500).send('Server Error');
//   }
// });

router.post(
  '/',
  [
    check('name', 'Please add name.').not().isEmpty(),
    check('email', 'Please include a valid email.').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters.'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      const user = await db.Users.findOne({
        where: { email: email },
      });
      if (email) {
        res.status(400).json({ msg: 'User already exsits.' });
      }
      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, process.env.secret, {
        expiresIn: 360000,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
