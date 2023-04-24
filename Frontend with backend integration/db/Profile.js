
const mongoose=require('mongoose');


const ProfileSchema=new mongoose.Schema({
    fname: String,
    lname: String,
    age: String,
    gen:String,
    h:String ,
    w: String,
    elevel: String
})
module.exports=mongoose.model("Profiledb",ProfileSchema)
