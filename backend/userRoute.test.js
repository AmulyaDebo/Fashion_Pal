const request = require('supertest');

const userRoute = require('./routes/userRoute');
const app = require('./Server'); // Replace with the path to your Express app file
let server; // Declare a variable to hold the server instance
app.use('/api/users', userRoute);
userPort = 4000;
beforeAll((done) => {
  server = app.listen(userPort, () => {
    console.log(`User test server is running on port ${userPort}`);
    done();
  });
});

// Close the user test server after all tests
afterAll((done) => {
  server.close(done);
});
// Test registration route

it('should register a new user', async () => {
  const response = await request(app) // Use the server instance instead of app
    .post('/api/users/register')
    .send({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });


it('should return an error if email is already in use', async () => {
  const response = await request(app) // Use the server instance instead of app
    .post('/api/users/register')
    .send({
      name: 'Jane Doe',
      email: 'xyz@gmail.com.com',
      password: 'password456',
    });

  expect(response.status).toBe(200);
  expect(response.text).toBe('Email already in use');
});

// Test login route
it('should log in a user with valid credentials', async () => {
  const response = await request(app) // Use the server instance instead of app
    .post('/api/users/login')
    .send({
      email: 'xyz@gmail.com',
      password: '12345',
    });

  expect(response.status).toBe(200);
  expect(response.body.email).toBe('john@example.com');
});

it('should return an error with invalid credentials', async () => {
  const response = await request(app) // Use the server instance instead of app
    .post('/api/users/login')
    .send({
      email: 'xyz@gmail.com',
      password: 'wrongpassword',
    });

  expect(response.status).toBe(400);
  expect(response.text).toBe('Invalid credentials');
});

// Add more test cases for other routes as needed
