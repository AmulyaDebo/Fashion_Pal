const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const productsRoute = require("./routes/productsRoute");
const userRoute = require('./routes/userRoute');
const yaml = require('js-yaml');
const fs = require('fs');

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

// Read configuration from YAML file
const environment = process.env.NODE_ENV || 'development';
const configPath = './env-local.yaml';
const configFile = fs.readFileSync(configPath, 'utf8');
const config = yaml.load(configFile);

const { PORT, MONGODB_URI, TEST_MONGODB_URI } = config[environment];

if (!MONGODB_URI && environment !== 'test') {
  console.log('MongoDB URI is missing');
  process.exit(1);
}

const mongoDBURI = environment === 'test' ? TEST_MONGODB_URI : MONGODB_URI;

mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connection successful');
}).catch((error) => {
  console.log('MongoDB connection failed:', error);
  process.exit(1);
});

const dbconnect = mongoose.connection;

dbconnect.on('error', () => {
  console.log('MongoDB connection failed');
});

dbconnect.on('connected', () => {
  console.log('MongoDB connection successful');
});

if (environment !== 'test') {
  const port = PORT || 5000;
  startServer(port);
}

module.exports = app;
