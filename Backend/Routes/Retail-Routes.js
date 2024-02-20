import express from 'express';

import { getBill, updateCustomerInfo, handleDiscount, addPayment, deletePayment, handleChangeInPaymentDetail } from '../Controller/Retail-Controller.js';

const router = express.Router();

router.get('/api/getBill/:billNumber', getBill);
router.post('/api/updateCustomerInfo', updateCustomerInfo);
router.post('/api/handleDiscount', handleDiscount);
router.post('/api/addPayment', addPayment);
router.delete('/api/deletePayment/:billNumber/:index', deletePayment);
router.put('/api/updatePaymentDetail', handleChangeInPaymentDetail);




export default router;