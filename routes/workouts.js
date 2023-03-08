require('dotenv').config();

const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const Workout = require('../models/workout')

// Create Workouts if the user is authenticated
router.post('/:id', checkAuth, (req, res, next) => {
    const workout = new Workout({
        title: req.body.title,
        description: req.body.description,
        exercises: req.body.exercises,
        creator: req.userData.userId
    });
    workout.save()
        .then(result => {
            res.status(201).json({
                message: 'Workout created successfully!',
                workout: {
                    id: result._id,
                    title: result.title,
                    description: result.description,
                    exercises: result.exercises,
                    creator: result.creator
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});



// Fetch workouts if the user is authenticated
router.get('/', checkAuth, (req, res, next) => {
    Workout.find({ creator: req.userData.userId }, (err, workouts) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ workouts });
    });
});



module.exports = router;
