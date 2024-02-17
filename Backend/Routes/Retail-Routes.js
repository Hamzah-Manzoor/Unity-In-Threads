import express from 'express';

import { getBill } from '../Controller/Retail-Controller.js';

const router = express.Router();

router.get('/api/getBill/:billNumber', getBill);

export default router;