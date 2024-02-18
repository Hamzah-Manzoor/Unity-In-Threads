import express from 'express'
const router = express.Router();

import {addresumeOrders} from '../Controller/Order_Controller.js'

router.post('/resumeOrders' , addresumeOrders)


export default  router;