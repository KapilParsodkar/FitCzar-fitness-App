const express=require('express')
const cors=require("cors");
require('./db/config')
const User=require("./db/user") 
const Exercisedb=require("./db/exercisedb")
const Profiledb=require("./db/Profile")
const app=express()
app.use(express.json())
app.use(cors())
app.post("/signup",async(req,res)=>{
   
   let user=new User(req.body)
   let result=await user.save()
   result=result.toObject()
   delete result.pwd
    res.send(result)
})

app.post("/login",async(req,res)=>{
   if (req.body.pwd && req.body.email){
    let user= await User.findOne(req.body).select("-password")
    if(user){
        res.send(user)
    }else{res.send({result:"no user found"})}
   }else{
    res.send({result:"no user found"})
   }
})

app.post("/add-exercise",async (req,res)=>{
  let exercise=new Exercisedb(req.body)
  let result=await exercise.save()
  res.send(result)
})

app.post("/profile",async(req,res)=>{
   let profile=new Profiledb(req.body)
   let result=await profile.save()
   res.send(result)

})


app.get("/exercises",async (req,res)=>{
   let exercises=await Exercisedb.find()
   if(exercises.length>0){
    res.send(exercises)
   }else{
    res.send({result:"no exercises found"})
   }
})

app.delete("/exercise/:id",async(req,res)=>{

    const result= await Exercisedb.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get("/exercise/:id",async(req,res)=>{
     let result=await Exercisedb.findOne({_id:req.params.id})
     if(result){
        res.send(result)
     }else{
        res.send({result:"no record found"})
     }
})

app.put("/exercise/:id",async(req,res)=>{
    let result=await Exercisedb.updateOne({
        _id:req.params.id
    },{
        $set:req.body
    })
    res.send(result)
})



app.listen(3001,()=>{
    console.log("http://localhost:3001/")
})

