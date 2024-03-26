import express from 'express';

import { getBill, updateCustomerInfo, handleDiscount, addPayment, deletePayment, handleChangeInPaymentDetail, addBill, resumeBill, getLastBillNumber, closeBill, fetchResumableBills } from '../Controller/Retail-Controller.js';

const router = express.Router();

router.get('/api/getBill/:billNumber', getBill);
router.post('/api/updateCustomerInfo', updateCustomerInfo);
router.post('/api/handleDiscount', handleDiscount);
router.post('/api/addPayment', addPayment);
router.delete('/api/deletePayment/:billNumber/:index', deletePayment);
router.put('/api/updatePaymentDetail', handleChangeInPaymentDetail);
router.post('/api/addBill', addBill);
router.put('/api/resumeBill/:billNumber', resumeBill);
router.get('/api/lastBillNumber', getLastBillNumber);
router.put('/api/closeBill/:billNumber', closeBill);
router.get('/api/fetchResumableBills', fetchResumableBills);




export default router;