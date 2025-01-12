const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,  },
    email: {
        type: String,
        required: true,
        unique: true,  
        lowercase: true,  
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
    },
});

const Users = mongoose.model('users', userSchema);

module.exports = Users;
