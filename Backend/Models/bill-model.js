import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const purchasingDetailsSchema = new mongoose.Schema({
  itemType: String,
  productCode: String,
  productName: String,
  size: String,
  orderNumber: String,
  rate: Number,
  quantity: Number
});

const paymentDetailsSchema = new mongoose.Schema({
  paymentDate: Date,
  amountPaid: Number,
  paymentMode: String
});

const billSchema = new mongoose.Schema({
  billNumber: Number,
  discount: Number,
  name: String,
  contact: String,
  purchasingDetails: [purchasingDetailsSchema],
  paymentDetails: [paymentDetailsSchema]
});

const Bill = mongoose.model('Bill', billSchema);

export default Bill;
