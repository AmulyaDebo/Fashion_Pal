const express = require("express");
const { addListener } = require("process");
const bodyParser=require("body-parser");
const cors = require('cors');

const app = express();
var dbconnection = require("./db");
var productsRoute=require("./routes/productsRoute");
var userRoute = require('./routes/userRoute');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

  app.use(express.json());


app.use('/api/products/',productsRoute);
app.use('/api/users/',userRoute);
app.use(bodyParser.json());
app.get("",(req,res)=>{
    res.send('This is from backend')
});
const port = 5000;
app.listen(port,()=>console.log("Server has started"));
