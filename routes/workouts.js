require('dotenv').config();

const express = require('express');
const router = express.Router();
const checkAuth  = require('../middleware/check-auth');
const Workout = require('../models/workout')

// Create Workout if the user is authenticated
router.post('/:id', checkAuth, async (req, res, next) => {
  const { title, description, exercises } = req.body;
  const creator = req.userData.userId;
  try {
    const workout = await new Workout({ title, description, exercises, creator }).save();
    res.status(201).json({
      message: 'Workout created successfully!',
      workout: {
        id: workout._id,
        ...workout._doc,
        creator
      }
    });
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
});

// Update Workouts by id if the user is authenticated
router.patch('/:id', checkAuth, async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    const result = await Workout.updateOne({ _id: id, creator: req.userData.userId }, { $set: updateOps }).exec();
    console.log("result", result)
    if (result.modifiedCount > 0) {
      res.status(200).json({
        message: 'Workout updated successfully!',
        workout: {
          id: id,
          ...updateOps
        }
      });
    } else {
      res.status(404).json({
        message: 'Workout not found or not authorized to update'
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
});

// Delete Workouts by id if the user is authenticated
router.delete('/:id', checkAuth, async (req, res, next) => {
  const id = req.params.id;
  try {
    const workout = await Workout.findOneAndDelete({ _id: id, creator: req.userData.userId });
    if (workout) {
      res.status(200).json({
        message: 'Workout deleted successfully!',
        workout: workout
      });
    } else {
      res.status(404).json({
        message: 'Workout not found or not authorized to delete'
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
});

// Fetch workouts if the user is authenticated
router.get('/', checkAuth, async (req, res, next) => {
  try {
    const workouts = await Workout.find({ creator: req.userData.userId }).exec();
    return res.status(200).json({ workouts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



module.exports = router;
