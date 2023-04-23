const mongoose=require('mongoose');


const ExerciseSchema=new mongoose.Schema({
    name:String,
   sets:String,
    reps:String,
    userId:String,
    lbs:String
})

module.exports=mongoose.model("Exercisedb",ExerciseSchema)