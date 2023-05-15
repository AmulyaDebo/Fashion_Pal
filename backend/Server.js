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

// Define the custom timestamp format
morgan.token('CUSTOM_TIMESTAMP', () => {
  const now = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const timestamp = `${days[now.getUTCDay()]}, ${now.getUTCDate()} ${months[now.getUTCMonth()]} ${now.getUTCFullYear()} ${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
  return timestamp;
});

// Create a custom Winston logger with a file transport
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});

// Define the custom morgan format
const morganFormat = ':CUSTOM_TIMESTAMP GMT :method :url :status :res[content-length] - :response-time ms :data';

// Create a stream for morgan to write logs
const morganStream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

// Configure CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://172.18.0.2:3000'],
  credentials: true,
}));

// Parse JSON request bodies
app.use(bodyParser.json());

// Configure morgan logging
app.use(morgan(morganFormat, { stream: morganStream }));

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

// Start the server
if (environment !== 'test') {
  const port = PORT || 5000;
  app.listen(port, () => console.log("Server has started"));
}

module.exports = app;
