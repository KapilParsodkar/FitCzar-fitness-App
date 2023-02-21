const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb://127.0.0.1/fitczar', { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(err=> {
    console.log('Connection failed!', err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

module.exports = app;

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}...`));
