const userModel = require("../model/users");
const adminModel= require("../model/adminModel");


const insertadmin = async(req,res)=>
 {
  
     try{
        console.log(req.body.name)
         const singleadmin = new adminModel({
              
               name:"Pragya",
               group:"Team", 
               user_id:"63eb2a4ae0ded43a8ac17255" 
             });
             const admindata= await singleadmin.save();
             res.render('user')
     }
     catch(error)
     {
         console.log(error.message);
     }
 }
 const insertuser = async(req,res)=>
 {
  
     try{
        console.log(req.body.name)
         const singleuser = new userModel({
              
               name:"Bhaskar",
               group:"Team",   
             });
             const userdata= await singleuser.save();
             res.render('user')
     }
     catch(error)
     {
         console.log(error.message);
     }
 }
 const getadmin= async(req,res)=>
 {
     try{
         const admins = await adminModel.find().populate('user_id')
         console.log(admins)
     }
     catch(error)
     {
         console.log(error.message);
     }
 }
module.exports=
{
    insertadmin,
    getadmin,
    insertuser
}