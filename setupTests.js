const mongoose = require('mongoose');

beforeAll(async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  };
  await mongoose.connect('mongodb+srv://raonayineni:ViYA7Xtd9oLbRm2D@fitczarappcluster.spu6vxw.mongodb.net/fitczar?retryWrites=true&w=majority', options);
});

afterAll(async () => {
  await mongoose.connection.close();
});
