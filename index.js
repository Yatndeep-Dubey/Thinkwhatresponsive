const express = require("express");
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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

 app.use("/public/images",express.static('./public/images'));
