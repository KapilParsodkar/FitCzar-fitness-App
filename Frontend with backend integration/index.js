const express = require('express')
const cors = require("cors");
const bcrypt = require('bcrypt');
require('./db/config')
const User = require("./db/user")
const Exercisedb = require("./db/exercisedb")
const app = express()
app.use(express.json())
app.use(cors())


app.post("/signup", async (req, res) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.pwd, saltRounds);

        let user = new User({
            ...req.body,
            pwd: hashedPassword,
        });

        let result = await user.save();
        result = result.toObject();
        delete result.pwd;
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ result: "internal server error" });
    }
});


app.post("/login", async (req, res) => {
    try {
        if (req.body.pwd && req.body.email) {
            let user = await User.findOne({ email: req.body.email }).select("+pwd");

            if (user) {
                if (req.body.pwd && user.pwd) {
                    const passwordMatch = await bcrypt.compare(req.body.pwd, user.pwd);

                    if (passwordMatch) {
                        res.send(user);
                    } else {
                        res.send({ result: "incorrect password" });
                    }
                } else {
                    res.send({ result: "password not found" });
                }
            } else {
                res.send({ result: "no user found" });
            }
        } else {
            res.send({ result: "no user found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ result: "internal server error" });
    }
});


app.post("/add-exercise", async (req, res) => {
    let exercise = new Exercisedb(req.body)
    let result = await exercise.save()
    res.send(result)
})


app.get("/exercises", async (req, res) => {
    let exercises = await Exercisedb.find()
    if (exercises.length > 0) {
        res.send(exercises)
    } else {
        res.send({ result: "no exercises found" })
    }
})

app.delete("/exercise/:id", async (req, res) => {

    const result = await Exercisedb.deleteOne({ _id: req.params.id })
    res.send(result)
})

app.get("/exercise/:id", async (req, res) => {
    let result = await Exercisedb.findOne({ _id: req.params.id })
    if (result) {
        res.send(result)
    } else {
        res.send({ result: "no record found" })
    }
})

app.put("/exercise/:id", async (req, res) => {
    let result = await Exercisedb.updateOne({
        _id: req.params.id
    }, {
        $set: req.body
    })
    res.send(result)
})

app.listen(3001, () => {
    console.log("http://localhost:3001/")
})

