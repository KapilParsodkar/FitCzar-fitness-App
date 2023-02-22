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
  }
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
  });
  return schema.validate(user);
}

exports.User = User
module.exports.validateUser = validateUser;
