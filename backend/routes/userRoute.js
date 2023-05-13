
const mongoose = require("mongoose")
const express = require("express");

const {User,Admin}=require("../models/userModel")
const router = express.Router()
router.post("/register", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        res.send("Email already in use");
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        await newUser.save();
        res.send("User registration successful");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while registering the user");
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email, password: req.body.password });
     
      if (user) {
        res.send(user);
      } else {
        res.status(400).send("Invalid credentials");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  router.post("/adminlogin", async (req, res) => {
    try {
      const user = await Admin.findOne({ email: req.body.email, password: req.body.password });
      
      if (user) {
        res.send(user);
      } else {
        res.status(400).send("Invalid credentials");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
module.exports = router;
