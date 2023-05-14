const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const cors = require("cors");
const morgan = require("morgan");
const { createLogger, transports } = require("winston");

// Create a Winston logger
const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/application.log" }),
  ],
});

// Enable CORS
router.use(cors());

// Define the log format
const logFormat =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

// Add Morgan middleware for logging
router.use(
  morgan(logFormat, {
    stream: {
      write: (message) => {
        logger.info(message.trim());
      },
    },
  })
);

router.use(cors()); 

router.get("/getallproducts", async (req, res) => {
    try {
      const products = await Product.find({});
      console.log(products)
      return res.json({ products });
    } catch (err) {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });


  router.get('/getproductbyid', async (req, res) => {
    try {
      const product = await Product.findById(req.query._id);
      console.log(product)
      res.send(product);
    } catch (err) {
      return res.status(400).json({ message: 'Something went wrong' });
    }
  });
  

  
  router.post("/deleteproduct",(req,res)=>{
    Product.findByIdAndDelete(req.body.productid)
      .then(() => {
        res.send('Product deleted successfully')
      })
      .catch((err) => {
        return res.status(400).json({message:'Something went wrong'+err})
      })
  })

  router.route("/addproduct")
  .post((req, res) => {
    const { product } = req.body;
    console.log(product);
    const newProduct = new Product({
      name: product.name,
      price: product.price,
      description: product.description,
      countInStock: product.countInStock,
      image: product.image,
      category: product.category,
      gender: product.image
    });

    newProduct.save()
      .then(() => {
        res.send("Product added successfully");
      })
      .catch((err) => {
        console.error(err);
        return res.status(400).json({ message: "Something went wrong" });
      });
  });

module.exports = router;

module.exports=router

