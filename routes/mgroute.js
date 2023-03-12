const bodyParser = require("body-parser");
const express= require("express");
const mgRouter= express();
mgRouter.set('view engine', 'ejs');
mgRouter.set('views','./views/another')
const mgcontroller = require("../controller/mgcontroller");
const bodyparser= require('body-parser');
mgRouter.use(bodyParser.json());
mgRouter.use(bodyParser.urlencoded({extended:true}));