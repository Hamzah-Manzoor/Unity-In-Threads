const mongoose = require('mongoose');
mongoose.connect(process.env.Mongo_DB_URL);

const RetailUserSchema = new mongoose.Schema({
    email : {
        type : String , 
        required : true,
        unique : true
    },
    password : {
        type : String , 
        required : true
    },
    firstName: {
        type: String  , // New field
        required : true
    },
    lastName : {
        type: String  , // New field
        required : true
    },
    DOB : {
        type : Date
    },
},{timestamps : true})

const RetailUser = mongoose.model("RetailUserSchema" , RetailUserSchema);

module.exports = RetailUser;