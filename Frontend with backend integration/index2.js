

////////

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginSignUpDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("DB connected");
  })

// Defines the User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Defines the Profile schema
const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  age: { type: Number },
  gender: { type: String },
  height: { type: Number },
  heightUnits: { type: String },
  weight: { type: Number },
  weightUnits: { type: String },
  fitnessGoals: { type: [String] },
  medicalConditions: { type: [String] },
  dietaryRestrictions: { type: [String] },
  workoutHistory: { type: String },
});

// Defines the User model
const User = mongoose.model("User", userSchema);

// Defines the Profile model
const Profile = mongoose.model("Profile", profileSchema);


app.get("/", (req, res) => {
  res.send("yes")
})


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            res.send({ message: "Login successful", user: user });
          } else {
            res.send({ message: "Password did not match" });
          }
        });
      } else {
        res.send({ message: "User not registered" });
      }
    })
    .catch(err => {
      console.error("Error finding user:", err);
      res.status(500).send({ message: "Internal Server Error" });
    });
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hashes the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Creates a new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Creates a new profile for the user
    const profile = new Profile({ user: user._id });
    await profile.save();

    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// Fetch all user profiles
app.get("/profile", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

// Fetch user profile by userId
app.get("/profile/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const profile = await Profile.findOne({ user: userId });
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Updates user profile data based on user id
app.put("/profile/:userId", async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, age, gender, height, heightUnits, weight, weightUnits, fitnessGoals, medicalConditions, dietaryRestrictions, workoutHistory } = req.body;
    const userId = req.params.userId;

    // Updates the profile for the user
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { firstName, lastName, phoneNumber, age, gender, height, heightUnits, weight, weightUnits, fitnessGoals, medicalConditions, dietaryRestrictions, workoutHistory },
      { new: true }
    );

    if (profile) {
      res.status(200).send({ message: "Profile updated successfully", profile });
    } else {
      res.status(404).send({ message: "Profile not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});




app.listen(3003, () => {
  console.log("started at port 3003")
})