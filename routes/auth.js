require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { User, validateUser } = require('../models/user');

const secretKey = process.env.JWT_SECRET_KEY;

// Registration Route
router.post('/register', async (req, res, next) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send('User already registered.');
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: hashedPassword
    });

    const result = await newUser.save({ wtimeout: 30000 });
    const token = jwt.sign({ userId: result._id }, secretKey, { expiresIn: '1h' });

    res.status(201).json({
      message: 'User created successfully!',
      token: token,
      result: result
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});



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
