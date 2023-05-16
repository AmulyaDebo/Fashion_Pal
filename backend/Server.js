const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const productsRoute = require("./routes/productsRoute");
const userRoute = require('./routes/userRoute');
const yaml = require('js-yaml');
const fs = require('fs');
const morgan = require('morgan');
const winston = require('winston');
morgan.token('data', request => {
  if (request.body.password)
    request.body.password = '';
  return JSON.stringify(request.body);
});

// Create a write stream to the log file
const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' });

// Configure morgan middleware to log request details in JSON format
app.use(morgan('{"timestamp": ":date[iso]", "method": ":method", "url": ":url", "status_code": ":status", "content_length": ":res[content-length]", "response_time": ":response-time"}', {
  stream: accessLogStream,
   immediate: false
}));

accessLogStream.write('\n');
// Configure CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://172.18.0.2:3000'],
  credentials: true,
}));

// Parse JSON request bodies
app.use(bodyParser.json());

// Define routes
app.use('/api/products/', productsRoute);
app.use('/api/users/', userRoute);

app.get("", (req, res) => {
  res.send('This is from backend');
});

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

// Connect to MongoDB
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
  app.listen(port, () => console.log("Server has started"));
}

module.exports = app;
