import express from 'express';
import {send_mail_middleware} from './middleware.js'
import {send_mail} from './controller.js'

const router = express.Router();


// all routes in here are starting with /notification

router.post('/send_mail',send_mail_middleware,send_mail)


export default router;