import express from 'express';
import { subscribe, unsubscribe, list } from './controller.js';

const router = express.Router();

router.post('/subscribe', subscribe);
router.post('/unsubscribe', unsubscribe);
router.get('/list', list);

export default router;
