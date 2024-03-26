const mongoose = require('mongoose');
mongoose.connect(process.env.Mongo_DB_URL);

const ProductRateSchema = new mongoose.Schema({
    priceCode : {
        type : String , 
        required : true,
        unique : true
    },
    rate : {
        type : String , 
        required : true
    },
},{timestamps : true})

const ProductRate = mongoose.model("ProductRateSchema" , ProductRateSchema);

export default ProductRate;