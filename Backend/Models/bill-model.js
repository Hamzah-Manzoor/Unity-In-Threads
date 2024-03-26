import mongoose from 'mongoose';

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
  paymentMode: String,
  details: String
});

const billSchema = new mongoose.Schema({
  billNumber: Number,
  resumable: Boolean,
  discount: Number,
  name: String,
  contact: String,
  purchasingDetails: [purchasingDetailsSchema],
  paymentDetails: [paymentDetailsSchema]
});

const Bill = mongoose.model('Bill', billSchema);

export default Bill;
