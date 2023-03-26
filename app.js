const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // to address deprecation warning
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const workoutRoutes = require('./routes/workouts');


const app = express();
app.use(cors()); // enable CORS for all routes

// Serve Swagger UI documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  explorer: true,
  swaggerOptions: {
    oauth2RedirectUrl: 'http://localhost:3000/api-docs/oauth2-redirect.html',
    validatorUrl: null,
  },
}));

// mongoose.connect('mongodb://127.0.0.1/fitczar', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB!');
//   })
//   .catch(err => {
//     console.log('Error connecting to MongoDB:', err);
//   });

const connectionString = 'mongodb+srv://raonayineni:ViYA7Xtd9oLbRm2D@fitczarappcluster.spu6vxw.mongodb.net/fitczar?retryWrites=true&w=majority'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas!');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB Atlas:', err);
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
