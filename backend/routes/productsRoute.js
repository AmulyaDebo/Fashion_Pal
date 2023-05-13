const express=require("express");
const router=express.Router();
const Product=require("../models/productModel");
const cors = require("cors");
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

  router.post("/addproduct",(req,res)=>{
    const {product} = req.body;
    console.log(product);
    const newproduct = new Product({
      name:product.name,
      price:product.price,
      description:product.description,
      countInStock : product.countInStock,
      image:product.image,
      category:product.category,
      gender:product.image
    });
    
    newproduct.save()
      .then(() => {
        res.send("Product added successfully");
      })
      .catch((err) => {
        return res.status(400).json({message:"Something went wrong"})
      });
  });
  

module.exports=router

