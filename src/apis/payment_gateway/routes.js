import express from 'express';
import {charge_middleware} from './middleware.js'
import {charge} from './controller.js'

const router = express.Router();


// all routes in here are starting with /payment
router.post('/charge',charge_middleware,charge)

export default router;