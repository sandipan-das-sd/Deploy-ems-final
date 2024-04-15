const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({ 
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        
    },
    secretKey:{
        type:String,
    }
});

const LoginModel = mongoose.model("signupusers", LoginSchema); 
module.exports = LoginModel;
