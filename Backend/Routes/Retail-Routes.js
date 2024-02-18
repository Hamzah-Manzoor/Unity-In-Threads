import express from 'express';

import { getBill, updateCustomerInfo, handleDiscount, addPayment } from '../Controller/Retail-Controller.js';

const router = express.Router();

router.get('/api/getBill/:billNumber', getBill);
router.post('/api/updateCustomerInfo', updateCustomerInfo);
router.post('/api/handleDiscount', handleDiscount);
router.post('/api/addPayment', addPayment);

export default router;