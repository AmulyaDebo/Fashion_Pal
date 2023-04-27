const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require
    },
    email:{
        type:String,
        require
    },
    password:{
        type:String,
        require
    }
})

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        require
    },
    email:{
        type:String,
        require
    },
    password:{
        type:String,
        require
    }
})
const User=mongoose.model('users',userSchema)
const Admin=mongoose.model('authorisedusers',adminSchema)

module.exports = {
    User: mongoose.model('users', userSchema),
    Admin: mongoose.model('authorisedusers', adminSchema)
  };
  