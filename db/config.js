const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost:27017/loginsignupexercisedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
