import express from 'express'
const router = express.Router();

import {addOrder, addresumeOrders} from '../Controller/Order_Controller.js'
import { getOrders } from '../Controller/Order_Controller.js';
import { getOrder } from '../Controller/Order_Controller.js';

router.post('/resumeOrders' , addresumeOrders)


router.get('/get-Orders' , getOrders);

router.get('/getOrder' , getOrder);


router.post('/addOrder' , addOrder)


export default  router;