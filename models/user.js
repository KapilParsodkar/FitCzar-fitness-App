const mongoose = require('mongoose');
// const Joi = require('joi')

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
  phoneNumber:{
    type : Number,
    required : true,
    minlength : 10,
    maxlength : 25
 },
  password: {
    type: String,
    required: true,
    minlength: 12, 
    maxlength: 100
  }
  // Add any other fields needed for your application
});

const User = mongoose.model('User', userSchema);

 /*function validateUser(user){
  const schema = {
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(10).max(50).required(),
    phoneNumber: Joi.string().min(10).max(25).required(),
    password: Joi.string().min(12).max(25).required(),
  }
  return Joi.Validate(user, schema)
}*/

module.exports = User;
//exports.validate = validateUser


