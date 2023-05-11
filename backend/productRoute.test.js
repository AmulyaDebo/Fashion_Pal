const request = require('supertest');
const Product = require('./models/productModel');

const app = require('./Server'); // Assuming the app file is named app.js
const productPort = 9000;

// Create and listen to the product test server
let server;
beforeAll((done) => {
  server = app.listen(productPort, () => {
    console.log(`Product test server is running on port ${productPort}`);
    done();
  });
});

// Close the product test server after all tests
afterAll((done) => {
  server.close(done);
});

describe('Product Routes', () => {
  // Test for getting all products
  it('should get all products', async () => {
    const response = await request(server).get('/api/products/getallproducts'); // Use the server instance instead of app
    expect(response.status).toBe(200);
    expect(response.body.products).toBeDefined();
  });

  // Test for getting a product by ID
  it('should get a product by ID', async () => {
    // Create a sample product in the database
    const sampleProduct = new Product({
      name: 'Sample Product',
      price: 10,
      description: 'This is a sample product',
      countInStock: 10,
      image: 'sample.jpg',
      category: 'Sample Category',
      gender: 'Sample Gender',
    });
    await sampleProduct.save();

    // Make a request to get the product by ID
    const response = await request(server).get('/api/products/getproductbyid').query({ _id: sampleProduct._id }); // Use the server instance instead of app
    expect(response.status).toBe(200);
  
  });

  // Test for deleting a product
  it('should delete a product', async () => {
    // Create a sample product in the database
    const sampleProduct = new Product({
      name: 'Sample Product',
      price: 10,
      description: 'This is a sample product',
      countInStock: 10,
      image: 'sample.jpg',
      category: 'Sample Category',
      gender: 'Sample Gender',
    });
    await sampleProduct.save();

    // Make a request to delete the product
    const response = await request(server).post('/api/products/deleteproduct').send({ productid: sampleProduct._id }); // Use the server instance instead of app
    expect(response.status).toBe(200);
 
  });

  // Test for adding a product
  it('should add a product', async () => {
    const newProduct = {
      name: 'New Product',
      price: 20,
      description: 'This is a new product',
      countInStock: 5,
      image: 'new.jpg',
      category: 'New Category',
      gender: 'New Gender',
    };

    // Make a request to add the product
    const response = await request(server).post('/api/products/addproduct').send({ product: newProduct }); // Use the server instance instead of app
    expect(response.status).toBe(200);
 
  });
});
