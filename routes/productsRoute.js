const express=require("express");
const router=express.Router();
const Product=require("../models/productModel");
const cors = require("cors");
router.use(cors()); 

router.get("/getallproducts", async (req, res) => {
    try {
      const products = await Product.find({});
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
  

  

 

  

module.exports=router