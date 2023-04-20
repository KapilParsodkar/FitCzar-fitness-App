const express = require('express');
const checkAuth = require('../middleware/check-auth');
const { User } = require('../models/user');

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

// Update user-profile by id
router.put('/update-profile/:id', checkAuth, async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      height: req.body.height,
      weight: req.body.weight,
      fitnessGoals: req.body.fitnessGoals,
      medicalConditions: req.body.medicalConditions,
      dietaryRestrictions: req.body.dietaryRestrictions,
      workoutHistory: req.body.workoutHistory
    }, { new: true });

    if (!updatedUser) return res.status(404).json({ error: 'User not found' });

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete user-profile by id
router.delete('/:id', checkAuth, (req, res, next) => {
  const userId = req.params.id;

  User.findByIdAndRemove(userId)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    })
    .catch(error => {
      res.status(500).json({ message: 'Deleting user failed', error: error });
    });
});


module.exports = router;


