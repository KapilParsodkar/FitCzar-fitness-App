const app = require('./index');
const mongoose = require('mongoose');
const supertest = require('supertest');
const request = supertest;


let server;

beforeAll(async () => {
  const PORT = process.env.PORT || 3003;
  server = app.listen(PORT);
});

afterAll(async () => {
  await server.close();
  await mongoose.disconnect();
});

describe('User authentication tests', () => {
    it('should create a new user and return the user object without the password', async () => {
      const response = await request(app)
        .post('/signup')
        .send({
          name: 'Test User',
          email: 'test@example.com',
          pwd: 'test123',
        });
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('email', 'test@example.com');
      expect(response.body).not.toHaveProperty('pwd');
    }, 20000);
  
    it('should log in a user and return the user object without the password', async () => {
      const response = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          pwd: 'test123',
        }, 20000);
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('email', 'test@example.com');
    });
  });
  
  describe('Exercise management tests', () => {
    let createdExerciseId;
  
    it('should create a new exercise and return the created exercise object', async () => {
      const response = await request(app)
        .post('/add-exercise')
        .send({
          name: 'Test Exercise',
          description: 'A test exercise',
        });
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', 'Test Exercise');
      createdExerciseId = response.body._id;
    });
  
    it('should retrieve all exercises', async () => {
      const response = await request(app).get('/exercises');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  
    it('should retrieve a single exercise by ID', async () => {
      const response = await request(app).get(`/exercise/${createdExerciseId}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', 'Test Exercise');
    });
  
    it('should update an exercise by ID', async () => {
      const response = await request(app)
        .put(`/exercise/${createdExerciseId}`)
        .send({
          name: 'Updated Test Exercise',
        });
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('modifiedCount', 1);
    });
  
    it('should delete an exercise by ID', async () => {
      const response = await request(app).delete(`/exercise/${createdExerciseId}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('deletedCount', 1);
    });
  });
  