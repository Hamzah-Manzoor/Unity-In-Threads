import mongoose from "mongoose";

// Define the schema
const orderSchema = new mongoose.Schema({
  orderID : {
    type : String , 
    unique : true , 
    required : true,
  },
  orders: [
    {
      productName: String,
      productCode: String,
      stitchingCode: String,
      designCode: String,
      fabricCode: String,
      patchingFabricCode1: String,
      patchingFabricCode2: String,
      rate: Number,
      quantity: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  refSizeFormDate: String,
  Dates : [
    {
        tryDateFactory: String,
        tryDateActual: String,
        deliveryDateFactory: String,
        deliveryDateActual: String,
    }
  ],
  notes: String
});

// Define the model
const Order = mongoose.model('Order', orderSchema);

export default Order;
