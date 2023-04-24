const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://raonayineni:ViYA7Xtd9oLbRm2D@fitczarappcluster.spu6vxw.mongodb.net/fitczar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
