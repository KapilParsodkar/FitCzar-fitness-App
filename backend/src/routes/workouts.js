require('dotenv').config();

const express = require('express');
const router = express.Router();
const axios = require('axios');
const checkAuth = require('../middleware/check-auth');
const Workout = require('../models/workout')
const { User } = require('../models/user');
const exercises = require('../utils/exercises');

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

router.get('/recommendations/:userId', checkAuth, async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).send('User not found');
  }

  const { fitnessGoals, workoutHistory, medicalConditions, weight, height, age, gender } = user;
  const recommendations = [];

  // Calculate BMR
  const BMR = calculateBMR(weight, height, age, gender);

  // Adjust the number of recommended exercises based on BMR, workout history and medical conditions
  const numExercises = adjustNumExercises(BMR, workoutHistory, medicalConditions);

  // Filter exercises based on medical conditions
  const filteredExercises = filterExercisesByMedicalConditions(exercises, medicalConditions);

  // Generate recommendations
  fitnessGoals.forEach((goal) => {
    let exerciseType;
    let message;

    switch (goal) {
      case 'weight-loss':
        exerciseType = 'cardio';
        message = 'To support your weight loss goal, try these cardio exercises:';
        break;
      case 'muscle-gain':
        exerciseType = 'strength';
        message = 'To support your muscle building goal, try these strength exercises:';
        break;
      case 'cardiovascular-health':
        exerciseType = 'endurance';
        message = 'To support your cardiovascular health goal, try these endurance exercises:';
        break;
    }

    const filtered = filteredExercises.filter((exercise) => exercise.type === exerciseType);
    recommendations.push({
      message,
      exercises: filtered.slice(0, numExercises),
    });
  });

  res.status(200).send(recommendations);
});

function adjustNumExercises(BMR, workoutHistory, medicalConditions) {
  let baseExercises = 4;

  if (workoutHistory.includes('regularly') || workoutHistory.includes('athlete')) {
    baseExercises = 8;
  } else if (workoutHistory.includes('occasionally')) {
    baseExercises = 6;
  }

  if (BMR >= 2500) {
    baseExercises += 2; // Higher BMR, add 2 more exercises
  } else if (BMR >= 2000) {
    baseExercises += 1; // Moderate BMR, add 1 more exercise
  }

  // Adjust number of exercises based on medical conditions
  if (medicalConditions.includes('diabetes')) {
    baseExercises -= 1; // Reduce exercises for users with diabetes
  }
  if (medicalConditions.includes('high-blood-pressure')) {
    baseExercises -= 1; // Reduce exercises for users with high blood pressure
  }

  // ... (add more adjustments based on other medical conditions)

  return baseExercises;
}


function calculateBMR(weight, height, age, gender) {
  // Calculate BMR using Mifflin-St Jeor Equation
  let BMR;
  if (gender === 'male') {
    BMR = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === 'female') {
    BMR = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    // Average BMR for non-binary users
    BMR = (calculateBMR(weight, height, age, 'male') + calculateBMR(weight, height, age, 'female')) / 2;
  }
  return BMR;
}

function filterExercisesByMedicalConditions(exercises, medicalConditions) {
  return exercises.filter((exercise) => {
    // Add conditions to filter out exercises that are not suitable for users with certain medical conditions
    if (medicalConditions.includes('diabetes') && exercise.type === 'high-intensity') {
      return false;
    }
    if (medicalConditions.includes('high-blood-pressure') && exercise.type === 'heavy-lifting') {
      return false;
    }
    // ... (add more conditions based on other medical conditions)

    return true;
  });
}


module.exports = router;
