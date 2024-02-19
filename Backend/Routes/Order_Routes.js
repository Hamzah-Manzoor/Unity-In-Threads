import express from 'express'
const router = express.Router();

import {addresumeOrders} from '../Controller/Order_Controller.js'
import { getOrders } from '../Controller/Order_Controller.js';


router.post('/resumeOrders' , addresumeOrders)


router.get('/get-Orders' , getOrders);


export default  router;