const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema= new Schema({
   name:{
    type:String,
   },
   group:
   {
    type:String,
   },
   user_id:
   {
     type:mongoose.Schema.Types.ObjectId ,
     ref:'userModel'
   }
   
})
module.exports=mongoose.model("adminModel",adminSchema)
