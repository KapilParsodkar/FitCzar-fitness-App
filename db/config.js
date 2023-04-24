const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://raonayineni:ViYA7Xtd9oLbRm2D@fitczarappcluster.spu6vxw.mongodb.net/fitczar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferTimeoutMS: 30000, // Increase the timeout to 30 seconds
});

module.exports = connection;
