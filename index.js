const express = require("express");
const mongoose= require('mongoose')
const app = express();
const mgRouter=require("./routes/mgroute");
const mgController= require("./controller/mgcontroller")
const adminModel =require("./model/adminModel")
const userModel = require("./model/users")
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/ManagementSystem",{
useNewUrlParser: true,
useUnifiedTopology: true,
}
)
const db= mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected"));
app.listen(8080, () => {
    console.log(`Event app listening at http://localhost:8080`);
  });
 app.set('view engine', 'ejs');
app.set('views','./views')
app.use(express.static('public'))
 app.get("/" ,function(req,res)
 {
     res.render('index');
 })
 app.get("/course",function(req,res)
 {
    res.render('course',{username:"Yatndeep",usermail:"kuchbhi"})
 })
 
app.use('/assets',express.static('assets'));

 app.post("/",mgController.insertadmin);
 app.get("/admin",mgController.getadmin);
 app.post("/user",mgController.insertuser);
 app.use("/public/images",express.static('./public/images'));
