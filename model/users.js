const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema= new Schema({
   name:{
    type:String,
   },
   group:
   {
    type:String,
   }
})
module.exports=mongoose.model("userModel",userSchema)