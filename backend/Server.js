const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const dbconnection = require("./db");
const productsRoute = require("./routes/productsRoute");
const userRoute = require('./routes/userRoute');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json());

app.use('/api/products/', productsRoute);
app.use('/api/users/', userRoute);

app.get("", (req, res) => {
  res.send('This is from backend');
});

const startServer = (port) => {
  return app.listen(port, () => console.log("Server has started"));
};

// Conditionally start the server based on the environment
if (process.env.NODE_ENV !== 'test') {
  const port = 5000;
  startServer(port);
}

module.exports = app;




module.exports = app;
