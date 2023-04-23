const request = require('supertest');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = require('../app');
const { User } = require('../models/user');

const testDB = 'mongodb://127.0.0.1/fitczar_test';

beforeAll(async () => {
  await mongoose.disconnect();
  await mongoose.connect(testDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Auth Endpoints', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  describe('POST /register', () => {
    const newUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      phoneNumber: '1234567890',
      password: 'password1234',
      age: 25,
      gender: 'male',
      height: 180,
      weight: 80,
      fitnessGoals: ['weight-loss', 'muscle-gain'],
      medicalConditions: ['diabetes'],
      dietaryRestrictions: ['vegan'],
      workoutHistory: ['occasionally'],
    };

    test('should register a new user', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send(newUser);
        if (res.statusCode !== 201) {
          console.error('Error message:', res.body.error);
          console.error('Stack trace:', res.body.stack);
        }
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('token');
    });

    test('should not register a user with an existing email', async () => {
      await request(app)
        .post('/api/auth/register')
        .send(newUser);

      const res = await request(app)
        .post('/api/auth/register')
        .send(newUser);

      expect(res.statusCode).toEqual(400);
      expect(res.text).toEqual('User already registered.');
    });

    test('should not register a user with invalid data', async () => {
      const invalidUser = {
        ...newUser,
        firstName: '',
      };

      const res = await request(app)
        .post('/api/auth/register')
        .send(invalidUser);

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('POST /login', () => {
    const userCredentials = {
      email: 'johndoe@example.com',
      password: 'password1234',
    };

    beforeEach(async () => {
      const user = new User({
        ...userCredentials,
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '1234567890',
        age: 25,
        gender: 'male',
        height: 180,
        weight: 80,
        fitnessGoals: ['weight-loss', 'muscle-gain'],
        medicalConditions: ['diabetes'],
        dietaryRestrictions: ['vegan'],
        workoutHistory: ['occasionally'],
      });
      user.password = await bcrypt.hash(user.password, 10);
      await user.save();
    });

    test('should log in with correct credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send(userCredentials);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('userId');
    });

    test('should not log in with incorrect password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          ...userCredentials,
          password: 'wrongpassword',
        });

      expect(res.statusCode).toEqual(401);
      expect(res.body.message).toEqual('Authentication failed!');
    });

    test('should not log in with a non-existing user', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          ...userCredentials,
          email: 'nonexistent@example.com',
        });
      expect(res.statusCode).toEqual(401);
      expect(res.body.message).toEqual('Authentication failed!');
    });
  });
});   
