const mongoose = require('mongoose');

const mongoDBURL = 'mongodb+srv://amulyabangari:amulya@cluster0.2cp7gsd.mongodb.net/fashionpal';

const isTesting = process.env.NODE_ENV === 'test';

if (isTesting) {
  mongoose.connect('mongodb+srv://amulyabangari:amulya@cluster0.2cp7gsd.mongodb.net/myapp_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const dbconnect = mongoose.connection;

dbconnect.on('error', () => {
  console.log('Mongodb connection failed');
});

dbconnect.on('connected', () => {
  console.log('Mongodb connection successful');
});

module.exports = mongoose;
