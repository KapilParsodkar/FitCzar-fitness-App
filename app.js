const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const workoutRoutes = require('./routes/workouts');
// const swaggerDocument = require('./swagger.json');

const app = express();
app.use(cors()); // enable CORS for all routes

// Serve Swagger UI documentation
// const swaggerDocument = YAML.load('./swagger.yaml');
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const setupSwagger = require('./swagger');
setupSwagger(app);

mongoose.connect('mongodb://127.0.0.1/fitczar', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/workouts', workoutRoutes);

module.exports = app;

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
