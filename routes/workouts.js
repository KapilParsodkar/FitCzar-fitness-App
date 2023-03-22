require('dotenv').config();

const express = require('express');
const router = express.Router();
const axios = require('axios');
const checkAuth  = require('../middleware/check-auth');
const Workout = require('../models/workout')
const { User } = require('../models/user');

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

const exercises = [
  {
    name: 'Push-ups',
    type: 'strength',
    muscleGroups: ['chest', 'triceps', 'shoulders'],
  },
  {
    name: 'Pull-ups',
    type: 'strength',
    muscleGroups: ['back', 'biceps', 'forearms'],
  },
  {
    name: 'Squats',
    type: 'strength',
    muscleGroups: ['quadriceps', 'hamstrings', 'glutes', 'calves'],
  },
  {
    name: 'Lunges',
    type: 'strength',
    muscleGroups: ['quadriceps', 'hamstrings', 'glutes'],
  },
  {
    name: 'Plank',
    type: 'strength',
    muscleGroups: ['core'],
  },
  {
    name: 'Running',
    type: 'cardio',
    muscleGroups: ['legs', 'glutes', 'cardiovascular'],
  },
  {
    name: 'Jumping jacks',
    type: 'cardio',
    muscleGroups: ['cardiovascular', 'full-body'],
  },
  {
    name: 'Cycling',
    type: 'cardio',
    muscleGroups: ['legs', 'glutes', 'cardiovascular'],
  },
  {
    name: 'Swimming',
    type: 'endurance',
    muscleGroups: ['full-body', 'cardiovascular'],
  },
  {
    name: 'Rowing',
    type: 'endurance',
    muscleGroups: ['full-body', 'cardiovascular'],
  },
];


router.get('/recommendations/:userId', checkAuth, async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).send('User not found');
  }

  const fitnessGoals = user.fitnessGoals;
  const workoutHistory = user.workoutHistory;
  const recommendations = [];

  // Adjust the number of recommended exercises based on workout history
  let numExercises = 3;
  if (workoutHistory.includes('regularly') || workoutHistory.includes('athlete')) {
    numExercises = 5;
  } else if (workoutHistory.includes('occasionally')) {
    numExercises = 4;
  }

  fitnessGoals.forEach((goal) => {
    if (goal === 'weight-loss') {
      const cardioExercises = exercises.filter((exercise) => exercise.type === 'cardio');
      recommendations.push({
        message: 'To support your weight loss goal, try these cardio exercises:',
        exercises: cardioExercises.slice(0, numExercises),
      });
    } else if (goal === 'muscle-gain') {
      const strengthExercises = exercises.filter((exercise) => exercise.type === 'strength');
      recommendations.push({
        message: 'To support your muscle building goal, try these strength exercises:',
        exercises: strengthExercises.slice(0, numExercises),
      });
    } else if (goal === 'cardiovascular-health') {
      const enduranceExercises = exercises.filter((exercise) => exercise.type === 'endurance');
      recommendations.push({
        message: 'To support your cardiovascular health goal, try these endurance exercises:',
        exercises: enduranceExercises.slice(0, numExercises),
      });
    }
  });

  res.status(200).send(recommendations);
});


module.exports = router;
