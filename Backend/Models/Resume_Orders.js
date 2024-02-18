import mongoose from "mongoose";
// Define the schema
const resumeOrderSchema = new mongoose.Schema({
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
  }
});

// Define the model
const ResumeOrder = mongoose.model('ResumeOrder', resumeOrderSchema);

export default ResumeOrder;
