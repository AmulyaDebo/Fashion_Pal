const mongoose = require("mongoose");

var mongoDBURL='mongodb+srv://amulyabangari:amulya@cluster0.2cp7gsd.mongodb.net/fashionpal';

mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})

var dbconnect=mongoose.connection

dbconnect.on('error',()=>{console.log("Mongodb conenction failed")});

dbconnect.on('connected',()=>{console.log("Mongodb connection successful")});

module.exports=mongoose