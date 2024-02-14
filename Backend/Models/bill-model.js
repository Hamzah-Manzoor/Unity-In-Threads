import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const purchasingDetailsSchema = new Schema({
  itemType: String,
  productCode: String,
  productName: String,
  size: String,
  orderNumber: String,
  rate: Number,
  quantity: Number
});

const paymentDetailsSchema = new Schema({
  paymentDate: Date,
  amountPaid: Number,
  paymentMode: String
});

const billSchema = new Schema({
  billNumber: Number,
  discount: Number,
  name: String,
  contact: String,
  purchasingDetails: [purchasingDetailsSchema],
  paymentDetails: [paymentDetailsSchema]
});

const Bill = model('Bill', billSchema);

export default Bill;
