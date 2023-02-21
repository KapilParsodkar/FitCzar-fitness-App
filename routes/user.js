const express = require('express');
const checkAuth = require('../middleware/check-auth');
const User = require('../models/user'); 

const router = express.Router();


router.get('/:id', checkAuth, (req, res, next) => {
  const userId = req.params.id;

  User.findById(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ message: 'Fetching user failed', error: error });
    });
});

module.exports = router;


