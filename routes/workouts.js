require('dotenv').config();

const express = require('express');
const router = express.Router();
const axios = require('axios');
const checkAuth  = require('../middleware/check-auth');
const Workout = require('../models/workout')

//RapidAPI credentials
const RAPIDAPI_KEY = '5732d73a31msh79a182b5fc37c1cp1bc776jsnee65b8029201';
const RAPIDAPI_HOST = 'exercisedb.p.rapidapi.com';

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

//Fetch a library of exercises for the user to select exercises from open api 
router.get('/library-exercises', checkAuth, async (req, res) => {
  try {
    const query = req.query.query || '';

    const response = await axios.get('https://exercisedb.p.rapidapi.com/exercises', {
      headers: {
        'X-RapidAPI-Host': RAPIDAPI_HOST,
        'X-RapidAPI-Key': RAPIDAPI_KEY,
      },
    });

    const exercises = response.data;
    const filteredExercises = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(query.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(query.toLowerCase()) ||
      exercise.equipment.toLowerCase().includes(query.toLowerCase()) ||
      exercise.target.toLowerCase().includes(query.toLowerCase())
    );

    res.status(200).json(filteredExercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the exercises.' });
  }
});

module.exports = router;
