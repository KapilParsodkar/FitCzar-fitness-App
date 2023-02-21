const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../models/user');

// const { User, validate } = require('../models/user');


// Registration Route
router.post('/register', async (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: hash
      });
      user.save({ wtimeout: 30000 })
        .then(result => {
          res.status(201).json({
            message: 'User created successfully!',
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err.message,
          });
        });
    });
 });


/*router.post('/register', async (req, res, next) => {
  const { error } = validate(req.body)
  if (error) res.status(400).send(error.details[0].message)
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password
      });
      await user.save()
      res.send(user);
    });*/

// Login Route
router.post('/login', (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed!'
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: 'Authentication failed!'
        });
      }
      const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id }, 'secret_key', { expiresIn: '1h' });
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: 'Authentication failed!'
      });
    });
});

module.exports = router;
