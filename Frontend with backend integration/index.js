const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

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


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)


app.get("/",(req,res)=>{
    res.send("yo")
})

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          if (password === user.password) {
            res.send({ message: "Login Successfull", user: user });
          } else {
            res.send({ message: "Password did not match" });
          }
        } else {
          res.send({ message: "User not registered" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
      });
  });

app.post("/signup",  (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({message: "User already registerd"})
      } else {
        const user = new User({
            name,
            email,
            password
        })
        user.save()
        .then(() => {
            res.send( { message: "Successfully Registered, Please login now." })
        })
        .catch((err) => {
          console.error("Error saving user:", err);
        });
      }
    })
    .catch((err) => {
      console.error("Error finding user:", err);
    });
    
}) 

app.listen(3003,() => {
    console.log("started at port 3003")
})