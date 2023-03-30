/*const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app'); // Import your app

const User = require('../models/User');

const testDB = 'mongodb://127.0.0.1/fitczar';

beforeAll(async () => {
  await mongoose.disconnect();
  await mongoose.connect(testDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
    await mongoose.disconnect();
  }, 10000); // set timeout to 10 seconds
  

describe('Auth Endpoints', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  describe('POST /api/auth//register', () => {
    const newUser = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
    };

    test('should register a new user', async () => {
      const res = await request(app)
        .post('/api/auth//register')
        .send(newUser);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('token');
    });

    test('should not register a user with an existing email', async () => {
      await request(app)
        .post('/api/auth//register')
        .send(newUser);

      const res = await request(app)
        .post('/api/auth//register')
        .send(newUser);

      expect(res.statusCode).toEqual(400);
      expect(res.text).toEqual('User already registered.');
    });

    test('should not register a user with invalid data', async () => {
      const invalidUser = {
        name: '',
        email: 'johndoe@example.com',
        password: 'password123',
      };

      const res = await request(app)
        .post('/register')
        .send(invalidUser);

      expect(res.statusCode).toEqual(400);
    });
  });

  describe('POST /api/auth//login', () => {
    const userCredentials = {
      email: 'johndoe@example.com',
      password: 'password123',
    };

    beforeEach(async () => {
      await request(app)
        .post('/api/auth//register')
        .send(userCredentials);
    });

    test('should log in with correct credentials', async () => {
      const res = await request(app)
        .post('/api/auth//login')
        .send(userCredentials);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('token');
      expect(res.body).toHaveProperty('userId');
    });

    test('should not log in with incorrect password', async () => {
      const res = await request(app)
        .post('/api/auth//login')
        .send({
          ...userCredentials,
          password: 'wrongpassword',
        });

      expect(res.statusCode).toEqual(401);
      expect(res.body.message).toEqual('Authentication failed!');
    });

    test('should not log in with non-existent email', async () => {
      const res = await request(app)
        .post('/api/auth//login')
        .send({
          ...userCredentials,
          email: 'notfound@example.com',
        });

      expect(res.statusCode).toEqual(401);
      expect(res.body.message).toEqual('Authentication failed!');
    });
  });
});
*/