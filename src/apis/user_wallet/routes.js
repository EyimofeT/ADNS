import express from 'express';
import {credit_middleware,debit_middleware} from './middleware.js'
import {credit, debit, Users_logs,User_logs} from './controller.js'

const router = express.Router();


// all routes in here are starting with /wallet


router.post('/credit',credit_middleware,credit)

router.post('/debit',debit_middleware,debit)

router.get('/logs',Users_logs)
router.get('/logs/:id', User_logs)

export default router;