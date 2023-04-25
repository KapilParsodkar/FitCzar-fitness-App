const mongoose = require('mongoose');

beforeAll(async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
    bufferCommands: false, // Disable Mongoose buffering
    bufferMaxEntries: 0, // Set the maximum buffer entries to 0
  };
  await mongoose.connect('mongodb+srv://raonayineni:ViYA7Xtd9oLbRm2D@fitczarappcluster.spu6vxw.mongodb.net/fitczar?retryWrites=true&w=majority', options);
});

afterAll(async () => {
  await mongoose.connection.close();
});
