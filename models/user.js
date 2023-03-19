const mongoose = require('mongoose');
const Joi = require('joi');
const phoneRegex = /^[\d()+-]*$/;


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 30
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 25
  },
  password: {
    type: String,
    required: true,
    minlength: 12,
    maxlength: 100
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non-binary'],
    required: true
  },
  height: {
    type: Number,
    required: true,
    min: 0,
    max: 300
  },
  weight: {
    type: Number,
    required: true,
    min: 0,
    max: 1000
  },
  fitnessGoals: {
    type: [String],
    required: true,
    enum: ['weight-loss', 'muscle-gain', 'cardiovascular-health', 'flexibility', 'other'],
    default: ['other']
  },
  medicalConditions: {
    type: [String],
    enum: ['diabetes', 'high-blood-pressure', 'asthma', 'arthritis', 'other']
  },
  dietaryRestrictions: {
    type: [String],
    enum: ['vegan', 'vegetarian', 'pescatarian', 'gluten-free', 'dairy-free', 'other']
  },
  workoutHistory: {
    type: [String],
    enum: ['never-worked-out', 'occasionally', 'regularly', 'athlete'],
    required: true,
    default: ['never-worked-out']
  },

  // Add any other fields needed for the application
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),
    lastName: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ tlds: { allow: false } }).min(10).max(30).required(),
    phoneNumber: Joi.string().regex(phoneRegex).required(),
    password: Joi.string().min(12).max(100).required(),
    age: Joi.number().integer().min(18).max(120).required(),
    gender: Joi.string().valid('male', 'female', 'non-binary').required(),
    height: Joi.number().min(0).max(300).required(),
    weight: Joi.number().min(0).max(1000).required(),
    fitnessGoals: Joi.array().items(Joi.string().valid('weight-loss', 'muscle-gain', 'cardiovascular-health', 'flexibility', 'other')).required(),
    medicalConditions: Joi.array().items(Joi.string().valid('diabetes', 'high-blood-pressure', 'asthma', 'arthritis', 'other')),
    dietaryRestrictions: Joi.array().items(Joi.string().valid('vegan', 'vegetarian', 'pescatarian', 'gluten-free', 'dairy-free', 'other')),
    workoutHistory: Joi.array().items(Joi.string().valid('never-worked-out', 'occasionally', 'regularly', 'athlete')).required(),
  });
  return schema.validate(user);
}

exports.User = User
module.exports.validateUser = validateUser;
